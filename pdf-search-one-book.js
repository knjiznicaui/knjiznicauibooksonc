(async function () {
  const pdfjsLib = await import(
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.min.mjs'
  );

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.worker.min.mjs';

  const BOOKS = [
    {
      title: 'Bhakti-rasāmṛta-sindhu',
      file: 'books/Bhakti-rasāmṛta-sindhu.pdf'
    },
    {
      title: 'Rāga-vartma-candrikā',
      file: 'books/RagaVartmaCandrika_eng_2nd_ed.pdf'
    },
    {
      title: 'Ujjvala-nīlamaṇi',
      file: 'books/Ujjvala-nilamani-kirana_1Ed_2013.pdf'
    },
    {
      title: 'Mādhurya-kādambinī',
      file: 'books/Madhurya-kadambini-eng-1ed.pdf'
    },
    {
      title: 'Prema-bhakti-candrikā',
      file: 'books/Sri_Prema_Bhakti_Candrika.pdf'
    },
    {
      title: 'Caitanya-caritāmṛta — Ādi-līlā',
      file: 'books/Sri Caitanya-cartamrta Adi-lila.pdf'
    },
    {
      title: 'Caitanya-caritāmṛta — Madhya-līlā',
      file: 'books/Sri Caitanya-cartamrta Madhya-lila.pdf'
    },
    {
      title: 'Caitanya-caritāmṛta — Antya-līlā',
      file: 'books/Sri Caitanya-cartamrta Antya-lila.pdf'
    }
  ];

  const DB_NAME = 'raganuga-pdf-search';
  const DB_VERSION = 1;
  const STORE_NAME = 'pages';

  function normalizeText(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function makeSnippet(text, query) {
    const clean = String(text || '')
      .replace(/\s+/g, ' ')
      .trim();

    if (clean.length <= 350) {
      return clean;
    }

    const normalized = normalizeText(clean);
    const normalizedQuery = normalizeText(query);

    const position = normalizedQuery
      ? normalized.indexOf(normalizedQuery)
      : -1;

    if (position >= 0) {
      const start = Math.max(0, position - 120);
      const end = Math.min(clean.length, start + 350);

      return (
        (start > 0 ? '…' : '') +
        clean.slice(start, end) +
        (end < clean.length ? '…' : '')
      );
    }

    return clean.slice(0, 350) + '…';
  }

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(
        DB_NAME,
        DB_VERSION
      );

      request.onupgradeneeded = function () {
        const db = request.result;

        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(
            STORE_NAME,
            { keyPath: 'id' }
          );
        }
      };

      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function getAllPages(db) {
    return new Promise((resolve, reject) => {
      const transaction =
        db.transaction(
          STORE_NAME,
          'readonly'
        );

      const store =
        transaction.objectStore(STORE_NAME);

      const request =
        store.getAll();

      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function savePage(db, pageData) {
    return new Promise((resolve, reject) => {
      const transaction =
        db.transaction(
          STORE_NAME,
          'readwrite'
        );

      const store =
        transaction.objectStore(STORE_NAME);

      const request =
        store.put(pageData);

      request.onsuccess = function () {
        resolve();
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function clearDatabase(db) {
    return new Promise((resolve, reject) => {
      const transaction =
        db.transaction(
          STORE_NAME,
          'readwrite'
        );

      const store =
        transaction.objectStore(STORE_NAME);

      const request =
        store.clear();

      request.onsuccess = function () {
        resolve();
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  const box =
    document.createElement('div');

  box.style.position = 'fixed';
  box.style.left = '20px';
  box.style.right = '20px';
  box.style.top = '20px';
  box.style.bottom = '20px';
  box.style.overflow = 'auto';
  box.style.padding = '20px';
  box.style.background = '#ffffff';
  box.style.color = '#111111';
  box.style.zIndex = '99999';
  box.style.border = '2px solid #333';
  box.style.borderRadius = '12px';
  box.style.fontFamily = 'sans-serif';
  box.style.lineHeight = '1.5';

  box.innerHTML =
    '<strong>PDF SEARCH — preverjam shranjeni indeks ...</strong>' +
    '<br><br>' +
    'Prosimo počakaj.';

  document.body.appendChild(box);

  try {
    const db =
      await openDatabase();

    let index =
      await getAllPages(db);

    /*
     * Če indeks že obstaja, ga uporabimo.
     */

    if (index.length > 0) {
      console.log(
        'PDF SEARCH — uporabljen shranjeni indeks:',
        index.length,
        'strani'
      );

      box.innerHTML =
        '<strong>PDF SEARCH — shranjeni indeks najden ✅</strong>' +
        '<br><br>' +
        'Indeksiranih strani: ' +
        index.length.toLocaleString() +
        '<br><br>' +
        'Iskanje je pripravljeno.';
    }

    /*
     * Če indeksa še ni, ga ustvarimo.
     */

    if (index.length === 0) {
      box.innerHTML =
        '<strong>PDF SEARCH — pripravljam indeks prvič ...</strong>' +
        '<br><br>' +
        'To bo trajalo nekaj časa, ker prebiram vseh 8 knjig.';
    }

    if (index.length === 0) {
      for (
        let bookIndex = 0;
        bookIndex < BOOKS.length;
        bookIndex++
      ) {
        const book =
          BOOKS[bookIndex];

        box.innerHTML =
          '<strong>PDF SEARCH — pripravljam indeks ...</strong>' +
          '<br><br>' +
          '<strong>' +
          escapeHtml(book.title) +
          '</strong>' +
          '<br><br>' +
          'Knjiga: ' +
          (bookIndex + 1) +
          ' / ' +
          BOOKS.length;

        const loadingTask =
          pdfjsLib.getDocument({
            url: book.file,
            enableScripting: false
          });

        const pdf =
          await loadingTask.promise;

        for (
          let pageNumber = 1;
          pageNumber <= pdf.numPages;
          pageNumber++
        ) {
          const page =
            await pdf.getPage(
              pageNumber
            );

          const content =
            await page.getTextContent();

          const text =
            content.items
              .map(item => item.str || '')
              .join(' ')
              .replace(/\s+/g, ' ')
              .trim();

          if (text) {
            const pageData = {
              id:
                bookIndex +
                '-' +
                pageNumber,

              bookIndex:
                bookIndex,

              bookTitle:
                book.title,

              file:
                book.file,

              page:
                pageNumber,

              text:
                text,

              normalized:
                normalizeText(text)
            };

            index.push(pageData);

            await savePage(
              db,
              pageData
            );
          }

          if (
            pageNumber === 1 ||
            pageNumber % 100 === 0 ||
            pageNumber === pdf.numPages
          ) {
            box.innerHTML =
              '<strong>PDF SEARCH — pripravljam indeks ...</strong>' +
              '<br><br>' +
              '<strong>' +
              escapeHtml(book.title) +
              '</strong>' +
              '<br><br>' +
              'Knjiga: ' +
              (bookIndex + 1) +
              ' / ' +
              BOOKS.length +
              '<br>' +
              'Stran: ' +
              pageNumber +
              ' / ' +
              pdf.numPages +
              '<br>' +
              'Shranjene strani: ' +
              index.length.toLocaleString();
          }
        }
      }

      console.log(
        'PDF SEARCH — indeks shranjen:',
        index.length,
        'strani'
      );

      box.innerHTML =
        '<strong>PDF SEARCH — INDEKS SHRANJEN ✅</strong>' +
        '<br><br>' +
        'Indeksiranih strani: ' +
        index.length.toLocaleString() +
        '<br><br>' +
        'Od zdaj naprej se bo indeks lahko ponovno uporabil.';
    }

    /*
     * Iskalni uporabniški vmesnik.
     */

    box.innerHTML = `
      <strong>ISKANJE PO VSEH KNJIGAH — PRIPRAVLJENO ✅</strong>

      <br><br>

      <div style="
        padding:14px;
        background:#f4f4f4;
        border-radius:8px;
        margin-bottom:18px;
      ">
        Shranjenih indeksiranih strani:
        <strong>${index.length.toLocaleString()}</strong>
      </div>

      <div style="
        display:flex;
        gap:8px;
        margin-bottom:16px;
      ">
        <input
          id="library-search-input"
          type="search"
          placeholder="Vpiši besedo, npr. Kṛṣṇa ali bhakti"
          style="
            flex:1;
            min-width:0;
            padding:12px;
            font-size:16px;
            border:1px solid #bbb;
            border-radius:8px;
          "
        >

        <button
          id="library-search-button"
          type="button"
          style="
            padding:12px 18px;
            font-size:16px;
            border:0;
            border-radius:8px;
            cursor:pointer;
          "
        >
          Išči
        </button>
      </div>

      <div
        id="library-search-status"
        style="margin-bottom:14px;"
      ></div>

      <div id="library-search-results"></div>
    `;

    const input =
      document.getElementById(
        'library-search-input'
      );

    const button =
      document.getElementById(
        'library-search-button'
      );

    const status =
      document.getElementById(
        'library-search-status'
      );

    const resultsBox =
      document.getElementById(
        'library-search-results'
      );

    function search() {
      const query =
        input.value.trim();

      const normalizedQuery =
        normalizeText(query);

      resultsBox.innerHTML = '';

      if (!normalizedQuery) {
        status.textContent =
          'Vpiši iskalni izraz.';

        input.focus();

        return;
      }

      const results =
        index.filter(item =>
          item.normalized.includes(
            normalizedQuery
          )
        );

      status.textContent =
        'Najdenih strani: ' +
        results.length.toLocaleString() +
        ' za »' +
        query +
        '«';

      if (!results.length) {
        resultsBox.innerHTML =
          '<p>Ni zadetkov za <strong>' +
          escapeHtml(query) +
          '</strong>.</p>';

        input.focus();

        return;
      }

      results
        .slice(0, 100)
        .forEach(result => {
          const row =
            document.createElement('div');

          row.style.padding =
            '16px 0';

          row.style.borderBottom =
            '1px solid #ddd';

          const title =
            document.createElement('strong');

          title.textContent =
            result.bookTitle +
            ' · stran ' +
            result.page;

          const snippet =
            document.createElement('div');

          snippet.style.marginTop =
            '7px';

          snippet.textContent =
            makeSnippet(
              result.text,
              query
            );

          const openButton =
            document.createElement(
              'button'
            );

          openButton.type =
            'button';

          openButton.textContent =
            'Odpri stran ' +
            result.page;

          openButton.style.marginTop =
            '10px';

          openButton.style.padding =
            '8px 12px';

          openButton.style.cursor =
            'pointer';

          openButton.addEventListener(
            'click',
            function () {
              window.open(
                result.file +
                '#page=' +
                result.page,
                '_blank'
              );
            }
          );

          row.appendChild(title);
          row.appendChild(snippet);
          row.appendChild(openButton);

          resultsBox.appendChild(row);
        });

      if (results.length > 100) {
        const more =
          document.createElement('p');

        more.style.marginTop =
          '16px';

        more.textContent =
          'Prikazanih je prvih 100 zadetkov od ' +
          results.length.toLocaleString() +
          '.';

        resultsBox.appendChild(more);
      }

      input.focus();
      input.select();
    }

    button.addEventListener(
      'click',
      function (event) {
        event.preventDefault();
        search();
      }
    );

    input.addEventListener(
      'keydown',
      function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          search();
        }
      }
    );

    input.focus();

  } catch (error) {
    console.error(
      'PDF SEARCH — NAPAKA ❌',
      error
    );

    box.innerHTML =
      '<strong>PDF SEARCH — NAPAKA ❌</strong>' +
      '<br><br>' +
      escapeHtml(
        String(error)
      );
  }
})();
