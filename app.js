/* =========================================================
   UNIVERSAL AI BOOK LIBRARY
   ========================================================= */

/* =========================================================
   PROJECT CONFIGURATION
   ========================================================= */

const GITHUB_OWNER =
  'knjiznicaui';

const GITHUB_REPO =
  'knjiznicaui.github.io';

const AI_WORKER_URL =
  'https://ancient-lake-71ac.autointerviews.workers.dev';

const GITHUB_BOOKS_API =
  'https://api.github.com/repos/' +
  GITHUB_OWNER +
  '/' +
  GITHUB_REPO +
  '/contents/books';

const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/' +
  GITHUB_OWNER +
  '/' +
  GITHUB_REPO +
  '/main/books/';

let BOOKS = [];


/* =========================================================
   I18N
   ========================================================= */

const I18N = {

  en: {

    appTitle:
      'AI Book Library',

    library: 'Library',
    search: 'Search',
    create: 'Create',
    saved: 'My works',

    books: 'Loaded books',
    titles: 'titles',

    sources: 'Sources',
    passages: 'passages',

    acrossBooks:
      'Search loaded books…',

    noResults:
      'No passages found',

    searching:
      'Preparing the library search…',

    preparingSearch:
      'Preparing search index…',

    searchReady:
      'Library search ready',

    rebuildingSearch:
      'Building the library index…',

    searchHint:
      'Search the text of the loaded PDF books.',

    reader:
      'Reader',

    loading:
      'Loading…',

    openPdf:
      'Open PDF',

    openPage:
      'Open page',

    createWork:
      'Create',

    chooseBooks:
      'Choose books',

    selectedBooks:
      'selected',

    selectAll:
      'Select all',

    unselectAll:
      'Unselect all',

    aiLecture:
      'AI Lecture',

    lectureDescription:
      'Create a structured lecture using the selected books.',

    lectureTopic:
      'Lecture topic',

    lectureTopicPlaceholder:
      'What should the lecture explain?',

    lectureLength:
      'Lecture length',

    minutes10:
      '10 min',

    minutes20:
      '20 min',

    minutes40:
      '40 min',

    minutes60:
      '60 min',

    minutes120:
      '120 min',

    lectureLanguage:
      'Lecture language',

    createLecture:
      'Create lecture',

    aiAssistant:
      'AI Assistant',

    assistantDescription:
      'Use AI normally. Relevant information from the selected books can be used when useful.',

    assistantPrompt:
      'Message',

    assistantPlaceholder:
      'Ask anything, request an explanation, write something, plan something, summarize something, or discuss a topic…',

    assistantButton:
      'Ask AI',

    assistantPreparing:
      'AI is preparing your answer…',

    assistantNotCreated:
      'The answer has not been created yet.',

    assistantError:
      'Could not create the AI answer.',

    articleWriting:
      'AI Article Writing',

    articleDescription:
      'Create a very long, detailed article suitable for newspapers, magazines, journals, websites and other publications.',

    articleTopic:
      'Article topic',

    articlePlaceholder:
      'Describe the topic, idea, event, person, issue or theme you want the article to cover in depth…',

    articleLength:
      'Article length',

    articleMinimum:
      '10,000 words or more',

    createArticle:
      'Write article',

    articlePreparing:
      'AI is writing your long article…',

    articleNotCreated:
      'The article has not been created yet.',

    articleError:
      'Could not create the article.',

    askBooks:
      'Ask the Books',

    askDescription:
      'Ask specifically about the selected PDF books. Answers are based only on the library source material.',

    askQuestion:
      'Question',

    askQuestionPlaceholder:
      'Ask about the selected books: summaries, comparisons, facts, explanations, passages, dates, people, ideas, or other details…',

    askBooksButton:
      'Ask the Books',

    answer:
      'Answer',

    answerPreparing:
      'AI is searching the books and preparing your answer…',

    answerNotCreated:
      'The answer has not been created yet.',

    noAnswer:
      'The AI could not create an answer.',

    sourceMaterialOnly:
      'Answers are based only on the selected PDF books.',

    works:
      'Works',

    noSavedWorks:
      'No generated works yet.',

    lectureWork:
      'Lecture',

    assistantWork:
      'AI Assistant',

    articleWork:
      'Article',

    askWork:
      'Book question',

    created:
      'Created',

    deleteWork:
      'Delete',

    openWork:
      'Open',

    downloadWork:
      'Download',

    noBooks:
      'No PDF books have been loaded yet.',

    githubError:
      'The library books could not be loaded from GitHub.',

    chooseAtLeastOne:
      'Please select at least one book.',

    missingTopic:
      'Please enter a lecture topic.',

    missingAssistant:
      'Please enter a message.',

    missingArticle:
      'Please enter an article topic.',

    missingQuestion:
      'Please enter a question.',

    noRelevantPages:
      'No relevant passages were found in the selected books.',

    answerError:
      'Could not create the answer.',

    lectureError:
      'Could not create the lecture.',

    articleErrorGeneric:
      'Could not create the article.'

  },


  sl: {

    appTitle:
      'UI Knjižnica',

    library: 'Knjižnica',
    search: 'Iskanje',
    create: 'Ustvari',
    saved: 'Moja dela',

    books: 'Naložene knjige',
    titles: 'naslovov',

    sources: 'Viri',
    passages: 'odlomkov',

    acrossBooks:
      'Išči po naloženih knjigah…',

    noResults:
      'Odlomkov ni bilo mogoče najti',

    searching:
      'Pripravljam iskanje po knjižnici…',

    preparingSearch:
      'Pripravljam iskalni indeks…',

    searchReady:
      'Iskanje po knjižnici je pripravljeno',

    rebuildingSearch:
      'Gradim indeks knjižnice…',

    searchHint:
      'Išči po besedilu naloženih PDF knjig.',

    reader:
      'Bralnik',

    loading:
      'Nalaganje…',

    openPdf:
      'Odpri PDF',

    openPage:
      'Odpri stran',

    createWork:
      'Ustvari',

    chooseBooks:
      'Izberi knjige',

    selectedBooks:
      'izbranih',

    selectAll:
      'Označi vse',

    unselectAll:
      'Odznači vse',

    aiLecture:
      'AI predavanje',

    lectureDescription:
      'Ustvari strukturirano predavanje s pomočjo izbranih knjig.',

    lectureTopic:
      'Tema predavanja',

    lectureTopicPlaceholder:
      'Kaj naj predavanje razloži?',

    lectureLength:
      'Dolžina predavanja',

    minutes10:
      '10 min',

    minutes20:
      '20 min',

    minutes40:
      '40 min',

    minutes60:
      '60 min',

    minutes120:
      '120 min',

    lectureLanguage:
      'Jezik predavanja',

    createLecture:
      'Ustvari predavanje',

    aiAssistant:
      'AI pomočnik',

    assistantDescription:
      'Uporabljaj AI povsem normalno. Ko je koristno, lahko uporabi tudi ustrezne podatke iz izbranih knjig.',

    assistantPrompt:
      'Sporočilo',

    assistantPlaceholder:
      'Vprašaj karkoli, zahtevaj razlago, napiši besedilo, pripravi načrt, naredi povzetek ali odpri katerokoli temo…',

    assistantButton:
      'Vprašaj AI',

    assistantPreparing:
      'AI pripravlja odgovor…',

    assistantNotCreated:
      'Odgovor še ni ustvarjen.',

    assistantError:
      'AI odgovora ni bilo mogoče ustvariti.',

    articleWriting:
      'AI pisanje članka',

    articleDescription:
      'Ustvari zelo dolg in poglobljen članek za časopis, revijo, strokovno publikacijo, spletni portal, glasilo ali drugo publikacijo.',

    articleTopic:
      'Tema članka',

    articlePlaceholder:
      'Opiši temo, idejo, dogodek, osebo, vprašanje ali področje, o katerem želiš zelo poglobljen članek…',

    articleLength:
      'Dolžina članka',

    articleMinimum:
      '10.000 besed ali več',

    createArticle:
      'Napiši članek',

    articlePreparing:
      'AI piše dolg članek…',

    articleNotCreated:
      'Članek še ni ustvarjen.',

    articleError:
      'Članka ni bilo mogoče ustvariti.',

    askBooks:
      'Vprašaj knjige',

    askDescription:
      'Postavi vprašanje posebej o izbranih PDF knjigah. Odgovori temeljijo samo na knjižničnem gradivu.',

    askQuestion:
      'Vprašanje',

    askQuestionPlaceholder:
      'Vprašaj o izbranih knjigah: povzetek, primerjava, dejstva, razlaga, odlomki, datumi, osebe, ideje ali druge podrobnosti…',

    askBooksButton:
      'Vprašaj knjige',

    answer:
      'Odgovor',

    answerPreparing:
      'AI išče po knjigah in pripravlja odgovor…',

    answerNotCreated:
      'Odgovor še ni ustvarjen.',

    noAnswer:
      'AI ni mogel ustvariti odgovora.',

    sourceMaterialOnly:
      'Odgovori temeljijo samo na izbranih PDF knjigah.',

    works:
      'Dela',

    noSavedWorks:
      'Zaenkrat še ni ustvarjenih del.',

    lectureWork:
      'Predavanje',

    assistantWork:
      'AI pomočnik',

    articleWork:
      'Članek',

    askWork:
      'Vprašanje knjig',

    created:
      'Ustvarjeno',

    deleteWork:
      'Izbriši',

    openWork:
      'Odpri',

    downloadWork:
      'Prenesi',

    noBooks:
      'Zaenkrat ni naloženih PDF knjig.',

    githubError:
      'Knjig iz GitHuba ni bilo mogoče naložiti.',

    chooseAtLeastOne:
      'Najprej izberi vsaj eno knjigo.',

    missingTopic:
      'Najprej vpiši temo predavanja.',

    missingAssistant:
      'Najprej napiši sporočilo.',

    missingArticle:
      'Najprej vpiši temo članka.',

    missingQuestion:
      'Najprej napiši vprašanje.',

    noRelevantPages:
      'V izbranih knjigah ni bilo mogoče najti ustreznih odlomkov.',

    answerError:
      'Odgovora ni bilo mogoče ustvariti.',

    lectureError:
      'Predavanja ni bilo mogoče ustvariti.',

    articleErrorGeneric:
      'Članka ni bilo mogoče ustvariti.'

  }

};


/* =========================================================
   STATE
   ========================================================= */

let state = {

  screen:
    'library',

  book:
    0,

  query:
    '',

  filter:
    'All books',

  sources:
    [],

  script:
    true,

  toast:
    '',

  lang:
    'en',

  searchIndex:
    [],

  searchReady:
    false,

  searchLoading:
    false,

  lectureTopic:
    '',

  lectureLength:
    '20',

  lectureGenerating:
    false,

  generatedLecture:
    '',

  lectureError:
    '',

  lecturePassages:
    [],

  assistantPrompt:
    '',

  assistantGenerating:
    false,

  generatedAssistant:
    '',

  assistantError:
    '',

  assistantPassages:
    [],

  articleTopic:
    '',

  articleGenerating:
    false,

  generatedArticle:
    '',

  articleError:
    '',

  articlePassages:
    [],

  askPrompt:
    '',

  askGenerating:
    false,

  generatedAnswer:
    '',

  askError:
    '',

  askPassages:
    [],

  creationType:
    'assistant',

  works:
    [],

  bookmarks:
    []

};


/* =========================================================
   LOAD LOCAL STATE
   ========================================================= */

try {

  const saved =
    JSON.parse(
      localStorage.getItem(
        'universal-ai-library-state'
      ) || '{}'
    );

  Object.assign(
    state,
    saved
  );

} catch (error) {

  console.warn(
    'Could not load saved state.',
    error
  );

}


/* =========================================================
   STATE VALIDATION
   ========================================================= */

if (
  state.lang !== 'en' &&
  state.lang !== 'sl'
) {

  state.lang =
    'en';

}

if (!Array.isArray(state.sources)) {
  state.sources = [];
}

if (!Array.isArray(state.works)) {
  state.works = [];
}

if (!Array.isArray(state.bookmarks)) {
  state.bookmarks = [];
}

if (!Array.isArray(state.lecturePassages)) {
  state.lecturePassages = [];
}

if (!Array.isArray(state.assistantPassages)) {
  state.assistantPassages = [];
}

if (!Array.isArray(state.articlePassages)) {
  state.articlePassages = [];
}

if (!Array.isArray(state.askPassages)) {
  state.askPassages = [];
}

state.lectureLength =
  String(
    state.lectureLength ||
    '20'
  );

if (
  state.creationType !== 'lecture' &&
  state.creationType !== 'assistant' &&
  state.creationType !== 'article' &&
  state.creationType !== 'ask'
) {

  state.creationType =
    'assistant';

}


/* =========================================================
   GENERAL
   ========================================================= */

function t(key) {

  return (
    I18N[state.lang]?.[key] ||
    I18N.en[key] ||
    key
  );

}


/* =========================================================
   PDF URL
   ========================================================= */

function githubRawPdfUrl(filename) {

  return (
    GITHUB_RAW_BASE +
    encodeURIComponent(filename)
  );

}


/* =========================================================
   LOAD BOOKS FROM GITHUB
   ========================================================= */

async function loadBooksFromGitHub() {

  try {

    const response =
      await fetch(
        GITHUB_BOOKS_API +
        '?_=' +
        Date.now(),
        {
          cache:
            'no-store',

          headers: {
            Accept:
              'application/vnd.github+json'
          }
        }
      );

    if (!response.ok) {

      throw new Error(
        'GitHub API HTTP ' +
        response.status
      );

    }

    const files =
      await response.json();

    if (!Array.isArray(files)) {

      throw new Error(
        'GitHub did not return a file list.'
      );

    }

    const pdfFiles =
      files.filter(
        file =>
          file &&
          file.type === 'file' &&
          /\.pdf$/i.test(
            file.name || ''
          )
      );

    BOOKS =
      pdfFiles
        .map(file => {

          const title =
            String(
              file.name || ''
            ).replace(
              /\.pdf$/i,
              ''
            );

          return {

            id:
              'pdf-' +
              encodeURIComponent(
                file.name
              ),

            short:
              title,

            author:
              '',

            script:
              'PDF',

            filename:
              file.name,

            pdf:
              file.download_url ||
              githubRawPdfUrl(
                file.name
              )

          };

        })
        .sort(
          (a, b) =>
            String(a.short || '')
              .localeCompare(
                String(b.short || ''),
                undefined,
                {
                  sensitivity:
                    'base'
                }
              )
        );

    state.sources =
      BOOKS.map(
        (_, index) =>
          index
      );

    if (BOOKS.length > 0) {

      state.book =
        Math.max(
          0,
          Math.min(
            Number(state.book) || 0,
            BOOKS.length - 1
          )
        );

    } else {

      state.book = 0;

    }

    state.searchReady =
      false;

    state.searchLoading =
      false;

    state.searchIndex =
      [];

    save();
    render();

    console.log(
      'Universal AI Library:',
      BOOKS.length,
      'books loaded.'
    );

  } catch (error) {

    console.error(
      'Could not load books from GitHub:',
      error
    );

    BOOKS = [];

    state.sources = [];
    state.searchReady = false;
    state.searchIndex = [];

    save();
    render();

    toast(
      t('githubError')
    );

  }

}


/* =========================================================
   SAVE
   ========================================================= */

function save() {

  try {

    const savedState = {

      screen:
        state.screen,

      book:
        state.book,

      query:
        state.query,

      filter:
        state.filter,

      sources:
        state.sources,

      script:
        state.script,

      lang:
        state.lang,

      lectureTopic:
        state.lectureTopic,

      lectureLength:
        state.lectureLength,

      generatedLecture:
        state.generatedLecture,

      lectureError:
        state.lectureError,

      lecturePassages:
        state.lecturePassages,

      assistantPrompt:
        state.assistantPrompt,

      generatedAssistant:
        state.generatedAssistant,

      assistantError:
        state.assistantError,

      assistantPassages:
        state.assistantPassages,

      articleTopic:
        state.articleTopic,

      generatedArticle:
        state.generatedArticle,

      articleError:
        state.articleError,

      articlePassages:
        state.articlePassages,

      askPrompt:
        state.askPrompt,

      generatedAnswer:
        state.generatedAnswer,

      askError:
        state.askError,

      askPassages:
        state.askPassages,

      creationType:
        state.creationType,

      works:
        state.works,

      bookmarks:
        state.bookmarks

    };

    localStorage.setItem(
      'universal-ai-library-state',
      JSON.stringify(
        savedState
      )
    );

  } catch (error) {

    console.warn(
      'Could not save state.',
      error
    );

  }

}


/* =========================================================
   ESCAPING
   ========================================================= */

function escapeHtml(value) {

  return String(
    value ?? ''
  )
    .replace(
      /&/g,
      '&amp;'
    )
    .replace(
      /</g,
      '&lt;'
    )
    .replace(
      />/g,
      '&gt;'
    )
    .replace(
      /"/g,
      '&quot;'
    )
    .replace(
      /'/g,
      '&#039;'
    );

}

function escapeAttribute(value) {

  return String(
    value ?? ''
  )
    .replace(
      /\\/g,
      '\\\\'
    )
    .replace(
      /'/g,
      "\\'"
    );

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function setLanguage(lang) {

  if (
    lang !== 'en' &&
    lang !== 'sl'
  ) {

    return;

  }

  state.lang =
    lang;

  save();
  render();

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function go(screen) {

  state.screen =
    screen;

  save();
  render();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}


/* =========================================================
   TOAST
   ========================================================= */

function toast(message) {

  state.toast =
    message;

  render();

  setTimeout(
    () => {

      state.toast =
        '';

      render();

    },
    1800
  );

}


/* =========================================================
   LANGUAGE SELECTOR
   ========================================================= */

function languageSelector() {

  return `

    <div class="language-selector">

      <button
        type="button"
        class="chip ${
          state.lang === 'en'
            ? 'on'
            : ''
        }"
        onclick="
          setLanguage('en')
        ">

        🇬🇧 EN

      </button>

      <button
        type="button"
        class="chip ${
          state.lang === 'sl'
            ? 'on'
            : ''
        }"
        onclick="
          setLanguage('sl')
        ">

        🇸🇮 SL

      </button>

    </div>

  `;

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function nav() {

  return `

    <nav class="nav">

      ${[
        [
          'library',
          '▦',
          t('library')
        ],
        [
          'search',
          '⌕',
          t('search')
        ],
        [
          'create',
          '✦',
          t('create')
        ],
        [
          'saved',
          '♡',
          t('saved')
        ]
      ]
        .map(
          ([key, icon, label]) => `

            <button
              type="button"
              class="${
                state.screen === key
                  ? 'active'
                  : ''
              }"
              onclick="
                go('${key}')
              ">

              ${icon}

              <small>
                ${label}
              </small>

            </button>

          `
        )
        .join('')}

    </nav>

  `;

}


/* =========================================================
   LAYOUT
   ========================================================= */

function layout(body) {

  return `

    <div class="shell">

      <main class="phone">

        <div class="content">

          ${languageSelector()}

          ${body}

        </div>

        ${nav()}

        ${
          state.toast
            ? `

              <div class="toast">

                ${escapeHtml(
                  state.toast
                )}

              </div>

            `
            : ''
        }

      </main>

    </div>

  `;

}


/* =========================================================
   LIBRARY
   ========================================================= */

function library() {

  return layout(`

    <div class="eyebrow">

      ${t('library')}

    </div>

    <h1>

      ${t('appTitle')}

    </h1>

    <div class="section">

      <div
        style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:12px
        ">

        <h3>

          ${t('books')}

        </h3>

        <span class="muted">

          ${BOOKS.length}

          ${t('titles')}

        </span>

      </div>

      ${
        BOOKS.length

          ? `

            <div class="grid">

              ${BOOKS.map(
                (book, index) => `

                  <div
                    class="book"
                    onclick="
                      openBook(
                        ${index}
                      )
                    ">

                    <div class="cover">

                      <strong>

                        ${escapeHtml(
                          book.short
                        )}

                      </strong>

                    </div>

                  </div>

                `
              ).join('')}

            </div>

          `

          : `

            <div
              class="muted"
              style="
                padding:20px 0
              ">

              ${t('noBooks')}

            </div>

          `
      }

    </div>

  `);

}


/* =========================================================
   OPEN BOOK
   ========================================================= */

function openBook(index) {

  const book =
    BOOKS[index];

  if (
    !book ||
    !book.pdf
  ) {

    return;

  }

  state.book =
    index;

  save();

  openPdf(
    book.pdf
  );

}


/* =========================================================
   OPEN PDF
   ========================================================= */

function openPdf(
  file,
  page
) {

  if (!file) {
    return;
  }

  const target =
    page
      ? (
          file +
          '#page=' +
          encodeURIComponent(page)
        )
      : file;

  window.open(
    target,
    '_blank',
    'noopener,noreferrer'
  );

}


/* =========================================================
   READER
   ========================================================= */

function reader() {

  const book =
    BOOKS[state.book];

  if (!book) {

    return layout(`

      <h2>

        ${t('reader')}

      </h2>

      <div class="muted">

        ${t('noBooks')}

      </div>

    `);

  }

  return layout(`

    <div class="top">

      <button
        type="button"
        class="back"
        onclick="
          go('library')
        ">

        ‹

      </button>

      <div style="flex:1">

        <strong>

          ${escapeHtml(
            book.short
          )}

        </strong>

      </div>

    </div>

    <div class="section">

      <div class="eyebrow">

        ${t('reader')}

      </div>

      <h2>

        ${escapeHtml(
          book.short
        )}

      </h2>

      <button
        type="button"
        class="primary"
        onclick="
          openPdf(
            '${escapeAttribute(
              book.pdf
            )}'
          )
        ">

        ${t('openPdf')}

      </button>

    </div>

  `);

}


/* =========================================================
   PDF SEARCH
   ========================================================= */

const PDFJS_VERSION =
  '6.2.108';

const SEARCH_DB_NAME =
  'universal-ai-library-search-db';

const SEARCH_DB_VERSION =
  1;

const SEARCH_STORE_NAME =
  'pages';

let pdfjsPromise =
  null;

let searchFocusFrame =
  null;


/* =========================================================
   NORMALIZE SEARCH
   ========================================================= */

function normalizeSearchText(value) {

  return String(
    value || ''
  )
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .toLowerCase();

}


/* =========================================================
   SEARCH SNIPPET
   ========================================================= */

function makeSearchSnippet(
  result
) {

  const text =
    String(
      result.text ||
      result.english ||
      ''
    )
      .replace(
        /\s+/g,
        ' '
      )
      .trim();

  if (
    text.length <=
    320
  ) {

    return text;

  }

  const query =
    normalizeSearchText(
      state.query
    );

  const normalized =
    normalizeSearchText(
      text
    );

  const position =
    query
      ? normalized.indexOf(
          query
        )
      : -1;

  if (
    position >=
    0
  ) {

    const start =
      Math.max(
        0,
        position - 120
      );

    const end =
      Math.min(
        text.length,
        start + 320
      );

    return (
      (
        start > 0
          ? '…'
          : ''
      ) +
      text.slice(
        start,
        end
      ) +
      (
        end < text.length
          ? '…'
          : ''
      )
    );

  }

  return (
    text.slice(
      0,
      320
    ) +
    '…'
  );

}


/* =========================================================
   PDF ENTRIES
   ========================================================= */

function getPdfEntries() {

  return BOOKS
    .filter(
      book =>
        book &&
        book.pdf
    )
    .map(
      book => ({

        bookId:
          book.id,

        bookTitle:
          book.short,

        author:
          book.author || '',

        chapterTitle:
          'PDF',

        pdf:
          book.pdf

      })
    );

}


/* =========================================================
   PDF.JS
   ========================================================= */

async function getPdfJs() {

  if (
    !pdfjsPromise
  ) {

    pdfjsPromise =
      import(
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@' +
        PDFJS_VERSION +
        '/build/pdf.min.mjs'
      )
      .then(
        pdfjsLib => {

          pdfjsLib
            .GlobalWorkerOptions
            .workerSrc =
              'https://cdn.jsdelivr.net/npm/pdfjs-dist@' +
              PDFJS_VERSION +
              '/build/pdf.worker.min.mjs';

          return pdfjsLib;

        }
      );

  }

  return pdfjsPromise;

}


/* =========================================================
   SEARCH DATABASE
   ========================================================= */

function openSearchDatabase() {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      if (
        !(
          'indexedDB' in
          window
        )
      ) {

        reject(
          new Error(
            'IndexedDB is not supported.'
          )
        );

        return;

      }

      const request =
        indexedDB.open(
          SEARCH_DB_NAME,
          SEARCH_DB_VERSION
        );

      request.onupgradeneeded =
        function () {

          const db =
            request.result;

          if (
            !db.objectStoreNames.contains(
              SEARCH_STORE_NAME
            )
          ) {

            const store =
              db.createObjectStore(
                SEARCH_STORE_NAME,
                {
                  keyPath:
                    'id'
                }
              );

            store.createIndex(
              'bookId',
              'bookId',
              {
                unique:
                  false
              }
            );

            store.createIndex(
              'pdf',
              'pdf',
              {
                unique:
                  false
              }
            );

          }

        };

      request.onsuccess =
        function () {

          resolve(
            request.result
          );

        };

      request.onerror =
        function () {

          reject(
            request.error ||
            new Error(
              'IndexedDB error.'
            )
          );

        };

    }
  );

}


/* =========================================================
   CLEAR SEARCH DATABASE
   ========================================================= */

function clearSearchDatabase() {

  return openSearchDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                SEARCH_STORE_NAME,
                'readwrite'
              );

            const store =
              transaction.objectStore(
                SEARCH_STORE_NAME
              );

            const request =
              store.clear();

            request.onsuccess =
              () =>
                resolve();

            request.onerror =
              () =>
                reject(
                  request.error
                );

            transaction.oncomplete =
              () =>
                db.close();

            transaction.onerror =
              () =>
                reject(
                  transaction.error
                );

          }
        );

      }
    );

}


/* =========================================================
   LOAD CACHE
   ========================================================= */

function loadCachedSearchIndex() {

  return openSearchDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                SEARCH_STORE_NAME,
                'readonly'
              );

            const store =
              transaction.objectStore(
                SEARCH_STORE_NAME
              );

            const request =
              store.getAll();

            request.onsuccess =
              function () {

                const rows =
                  request.result ||
                  [];

                db.close();

                resolve(
                  rows
                );

              };

            request.onerror =
              function () {

                db.close();

                reject(
                  request.error
                );

              };

          }
        );

      }
    );

}


/* =========================================================
   SAVE SEARCH ROWS
   ========================================================= */

function saveSearchRows(
  rows
) {

  return openSearchDatabase()
    .then(
      db => {

        return new Promise(
          (
            resolve,
            reject
          ) => {

            const transaction =
              db.transaction(
                SEARCH_STORE_NAME,
                'readwrite'
              );

            const store =
              transaction.objectStore(
                SEARCH_STORE_NAME
              );

            rows.forEach(
              row => {

                store.put(
                  row
                );

              }
            );

            transaction.oncomplete =
              function () {

                db.close();
                resolve();

              };

            transaction.onerror =
              function () {

                db.close();

                reject(
                  transaction.error
                );

              };

          }
        );

      }
    );

}


/* =========================================================
   SEARCH ROW
   ========================================================= */

function makeSearchRow(
  bookId,
  bookTitle,
  author,
  chapterTitle,
  pdf,
  page,
  text
) {

  const cleanText =
    String(
      text ||
      ''
    )
      .replace(
        /\s+/g,
        ' '
      )
      .trim();

  return {

    id:
      bookId +
      '|' +
      pdf +
      '|' +
      page,

    bookId,

    bookTitle,

    author,

    chapterTitle:
      chapterTitle +
      ' · page ' +
      page,

    ref:
      'p. ' +
      page,

    page,

    pdf,

    text:
      cleanText,

    english:
      cleanText,

    normalized:
      normalizeSearchText(
        [
          bookTitle,
          author,
          chapterTitle,
          cleanText
        ].join(' ')
      )

  };

}


/* =========================================================
   BUILD PDF SEARCH INDEX
   ========================================================= */

async function buildPdfSearchIndex() {

  const pdfjsLib =
    await getPdfJs();

  const entries =
    getPdfEntries();

  const rows = [];

  for (
    let entryIndex = 0;
    entryIndex <
      entries.length;
    entryIndex++
  ) {

    const entry =
      entries[
        entryIndex
      ];

    const loadingTask =
      pdfjsLib.getDocument({
        url:
          entry.pdf,

        enableScripting:
          false

      });

    const pdf =
      await loadingTask.promise;

    for (
      let pageNumber = 1;
      pageNumber <=
        pdf.numPages;
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
          .map(
            item =>
              item.str ||
              ''
          )
          .join(' ')
          .replace(
            /\s+/g,
            ' '
          )
          .trim();

      if (text) {

        rows.push(
          makeSearchRow(
            entry.bookId,
            entry.bookTitle,
            entry.author,
            entry.chapterTitle,
            entry.pdf,
            pageNumber,
            text
          )
        );

      }

      if (
        state.screen ===
        'search'
      ) {

        state.searchIndex =
          rows.slice();

        render();

      }

    }

    try {

      await pdf.destroy();

    } catch (error) {}

  }

  return {
    rows
  };

}


/* =========================================================
   BUILD SEARCH INDEX
   ========================================================= */

async function buildSearchIndex() {

  if (
    state.searchLoading
  ) {

    return;

  }

  state.searchLoading =
    true;

  state.searchReady =
    false;

  if (
    state.screen ===
    'search'
  ) {

    render();

  }

  try {

    const expectedEntries =
      getPdfEntries();

    if (
      !expectedEntries.length
    ) {

      state.searchIndex =
        [];

      state.searchReady =
        true;

      return;

    }

    let cachedRows =
      [];

    try {

      cachedRows =
        await loadCachedSearchIndex();

    } catch (error) {

      console.warn(
        'Could not load cached index:',
        error
      );

    }

    const expectedIds =
      new Set(
        expectedEntries.map(
          entry =>
            entry.bookId +
            '|' +
            entry.pdf
        )
      );

    const cachedPdfRows =
      cachedRows.filter(
        row =>
          row &&
          row.pdf
      );

    const cachedIds =
      new Set(
        cachedPdfRows.map(
          row =>
            row.bookId +
            '|' +
            row.pdf
        )
      );

    const cacheComplete =
      expectedIds.size >
        0 &&
      expectedIds.size ===
        cachedIds.size &&
      [
        ...expectedIds
      ].every(
        id =>
          cachedIds.has(
            id
          )
      );

    let pdfRows =
      [];

    if (
      cacheComplete
    ) {

      pdfRows =
        cachedPdfRows;

      console.log(
        'Universal AI Library: cached search index used.',
        pdfRows.length,
        'pages.'
      );

    } else {

      try {

        await clearSearchDatabase();

      } catch (error) {

        console.warn(
          'Could not clear old search index.',
          error
        );

      }

      const built =
        await buildPdfSearchIndex();

      pdfRows =
        built.rows;

      try {

        await saveSearchRows(
          pdfRows
        );

      } catch (error) {

        console.warn(
          'Could not save search index.',
          error
        );

      }

    }

    state.searchIndex =
      pdfRows;

    state.searchReady =
      true;

  } catch (error) {

    console.error(
      'Search index error:',
      error
    );

    state.searchIndex =
      [];

    state.searchReady =
      false;

    toast(
      t('searching')
    );

  } finally {

    state.searchLoading =
      false;

    if (
      state.screen ===
      'search'
    ) {

      render();

    }

  }

}


/* =========================================================
   SEARCH INPUT
   ========================================================= */

function setSearchQuery(
  value
) {

  state.query =
    value;

  render();

  if (
    searchFocusFrame !==
      null
  ) {

    cancelAnimationFrame(
      searchFocusFrame
    );

  }

  searchFocusFrame =
    requestAnimationFrame(
      () => {

        searchFocusFrame =
          null;

        const input =
          document.querySelector(
            '.search'
          );

        if (input) {

          input.focus();

          const end =
            input.value.length;

          input.setSelectionRange(
            end,
            end
          );

        }

      }
    );

}


/* =========================================================
   SEARCH FILTER
   ========================================================= */

function setSearchFilter(
  value
) {

  state.filter =
    value;

  save();
  render();

}


/* =========================================================
   VISIBLE SEARCH RESULTS
   ========================================================= */

function getVisibleSearchResults() {

  const query =
    normalizeSearchText(
      state.query.trim()
    );

  let results =
    state.searchIndex;

  if (
    query
  ) {

    results =
      results.filter(
        item => {

          const text =
            item.normalized ||
            normalizeSearchText(
              [
                item.bookTitle,
                item.author,
                item.chapterTitle,
                item.ref,
                item.text,
                item.english
              ].join(' ')
            );

          return text.includes(
            query
          );

        }
      );

  }

  return results;

}


/* =========================================================
   SEARCH SCREEN
   ========================================================= */

function search() {

  if (
    !state.searchReady &&
    !state.searchLoading
  ) {

    buildSearchIndex();

  }

  if (
    !state.searchReady
  ) {

    return layout(`

      <h2>

        ${t('search')}

      </h2>

      <input
        class="search"
        value="${escapeAttribute(
          state.query
        )}"
        oninput="
          setSearchQuery(
            this.value
          )
        "
        placeholder="${t(
          'acrossBooks'
        )}">

      <div
        class="muted"
        style="
          margin-top:20px
        ">

        ${
          state.searchLoading
            ? t(
                'preparingSearch'
              )
            : t(
                'searching'
              )
        }

      </div>

    `);

  }

  const results =
    getVisibleSearchResults();

  return layout(`

    <h2>

      ${t('search')}

    </h2>

    <input
      class="search"
      value="${escapeAttribute(
        state.query
      )}"
      oninput="
        setSearchQuery(
          this.value
        )
      "
      placeholder="${t(
        'acrossBooks'
      )}">

    <div
      class="muted"
      style="
        margin-top:8px;
        margin-bottom:16px
      ">

      ${t(
        'searchHint'
      )}

    </div>

    <div
      class="muted"
      style="
        margin-bottom:8px
      ">

      ${results.length}

      ${t(
        'passages'
      )}

    </div>

    ${
      results.length

        ? results
            .slice(
              0,
              100
            )
            .map(
              (
                result,
                index
              ) => `

                <div
                  class="result"
                  onclick="
                    openSearchResult(
                      ${index}
                    )
                  ">

                  <div
                    class="booktitle">

                    ${escapeHtml(
                      result.bookTitle
                    )}

                    ·

                    ${escapeHtml(
                      result.ref
                    )}

                  </div>

                  <div
                    class="muted">

                    ${escapeHtml(
                      result.chapterTitle
                    )}

                  </div>

                  <div
                    style="
                      font-size:13px;
                      line-height:1.55;
                      margin-top:4px
                    ">

                    ${escapeHtml(
                      makeSearchSnippet(
                        result
                      )
                    )}

                  </div>

                  <button
                    type="button"
                    class="chip on"
                    style="
                      margin-top:10px
                    "
                    onclick="
                      event.stopPropagation();

                      openPdf(
                        '${escapeAttribute(
                          result.pdf
                        )}',
                        ${Number(
                          result.page
                        )}
                      );
                    ">

                    ${t(
                      'openPage'
                    )}

                  </button>

                </div>

              `
            )
            .join('')

        : `

          <div class="muted">

            ${t(
              'noResults'
            )}

          </div>

        `
    }

  `);

}


/* =========================================================
   OPEN SEARCH RESULT
   ========================================================= */

function openSearchResult(
  index
) {

  const results =
    getVisibleSearchResults();

  const result =
    results[
      index
    ];

  if (!result) {
    return;
  }

  openPdf(
    result.pdf,
    result.page
  );

}


/* =========================================================
   SOURCE SELECTION
   ========================================================= */

function toggleLectureSource(
  index
) {

  if (
    state.sources.includes(
      index
    )
  ) {

    state.sources =
      state.sources.filter(
        item =>
          item !== index
      );

  } else {

    state.sources = [
      ...state.sources,
      index
    ];

  }

  save();
  render();

}


/* =========================================================
   SELECT ALL / UNSELECT ALL SOURCES
   ========================================================= */

function toggleAllLectureSources() {

  if (!BOOKS.length) {
    return;
  }

  const allSelected =
    state.sources.length ===
      BOOKS.length;

  state.sources =
    allSelected
      ? []
      : BOOKS.map(
          (
            book,
            index
          ) => index
        );

  save();
  render();

}


/* =========================================================
   FORM INPUTS
   ========================================================= */

function setLectureTopic(
  value
) {

  state.lectureTopic =
    value;

  save();

}

function setLectureLength(
  value
) {

  state.lectureLength =
    String(value);

  save();
  render();

}

function setAssistantPrompt(
  value
) {

  state.assistantPrompt =
    value;

  save();

}

function setArticleTopic(
  value
) {

  state.articleTopic =
    value;

  save();

}

function setAskPrompt(
  value
) {

  state.askPrompt =
    value;

  save();

}


/* =========================================================
   AI PASSAGE FINDER
   ========================================================= */

function findAiPassages(
  instructionText
) {

  const instruction =
    normalizeSearchText(
      String(
        instructionText ||
        ''
      ).trim()
    );

  const allowedBookIds =
    new Set(
      state.sources
        .map(
          index =>
            BOOKS[
              index
            ]?.id
        )
        .filter(
          Boolean
        )
    );

  let candidates =
    state.searchIndex.filter(
      row =>
        row &&
        row.pdf &&
        allowedBookIds.has(
          row.bookId
        )
    );

  const words =
    instruction
      .split(/\s+/)
      .map(
        word =>
          normalizeSearchText(
            word.replace(
              /^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu,
              ''
            )
          )
      )
      .filter(
        word =>
          word.length >=
          3
      );

  candidates =
    candidates.map(
      row => {

        const text =
          row.normalized ||
          normalizeSearchText(
            [
              row.bookTitle,
              row.author,
              row.chapterTitle,
              row.ref,
              row.text,
              row.english
            ].join(' ')
          );

        let score =
          0;

        words.forEach(
          word => {

            if (
              text.includes(
                word
              )
            ) {

              score +=
                1;

            }

          }
        );

        if (
          instruction &&
          text.includes(
            instruction
          )
        ) {

          score +=
            5;

        }

        const titleText =
          normalizeSearchText(
            row.bookTitle ||
            ''
          );

        words.forEach(
          word => {

            if (
              titleText.includes(
                word
              )
            ) {

              score +=
                2;

            }

          }
        );

        return {

          ...row,

          aiScore:
            score

        };

      }
    );

  candidates =
    candidates
      .filter(
        row =>
          row.aiScore >
          0
      )
      .sort(
        (
          a,
          b
        ) => {

          if (
            b.aiScore !==
            a.aiScore
          ) {

            return (
              b.aiScore -
              a.aiScore
            );

          }

          return (
            Number(
              a.page ||
              0
            ) -
            Number(
              b.page ||
              0
            )
          );

        }
      );

  return candidates
    .slice(
      0,
      24
    )
    .map(
      row => {

        const rawText =
          String(
            row.text ||
            row.english ||
            ''
          )
            .replace(
              /\s+/g,
              ' '
            )
            .trim();

        const text =
          rawText.length >
          2600

            ? (
                rawText.slice(
                  0,
                  2600
                ) +
                '…'
              )

            : rawText;

        return {

          bookTitle:
            row.bookTitle ||
            '',

          author:
            row.author ||
            '',

          page:
            row.page ||
            '',

          text

        };

      }
    );

}


/* =========================================================
   SAVE GENERATED WORK
   ========================================================= */

function saveGeneratedWork(
  work
) {

  const item = {

    id:
      'work-' +
      Date.now() +
      '-' +
      Math.random()
        .toString(
          36
        )
        .slice(
          2,
          8
        ),

    type:
      work.type,

    title:
      work.title ||
      (
        work.type ===
        'assistant'

          ? t(
              'aiAssistant'
            )

          : work.type ===
            'article'

            ? t(
                'articleWriting'
              )

            : work.type ===
              'ask'

              ? t(
                  'askBooks'
                )

              : t(
                  'aiLecture'
                )
      ),

    prompt:
      work.prompt ||
      '',

    language:
      work.language ||
      '',

    length:
      work.length ||
      '',

    content:
      work.content ||
      '',

    passages:
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [],

    createdAt:
      new Date().toISOString()

  };

  state.works = [

    item,

    ...state.works.filter(
      existing =>
        existing &&
        existing.id !==
        item.id
    )

  ];

  state.works =
    state.works.slice(
      0,
      30
    );

  save();

  return item;

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatWorkDate(
  value
) {

  if (!value) {
    return '';
  }

  try {

    return new Date(
      value
    ).toLocaleString(
      state.lang ===
      'sl'
        ? 'sl-SI'
        : 'en-US',
      {
        dateStyle:
          'medium',

        timeStyle:
          'short'
      }
    );

  } catch (error) {

    return '';

  }

}


/* =========================================================
   MARKDOWN TO HTML
   ========================================================= */

function markdownToHtml(
  text
) {

  let html =
    escapeHtml(
      text
    );

  html =
    html.replace(
      /^### (.*)$/gm,
      '<h3>$1</h3>'
    );

  html =
    html.replace(
      /^## (.*)$/gm,
      '<h2>$1</h2>'
    );

  html =
    html.replace(
      /^# (.*)$/gm,
      '<h1>$1</h1>'
    );

  html =
    html.replace(
      /\*\*(.*?)\*\*/g,
      '<strong>$1</strong>'
    );

  html =
    html.replace(
      /^---$/gm,
      '<hr>'
    );

  const blocks =
    html
      .split(
        /\n\s*\n/
      )
      .map(
        block =>
          block.trim()
      )
      .filter(
        Boolean
      );

  return blocks
    .map(
      block => {

        if (
          block.startsWith(
            '<h1>'
          ) ||
          block.startsWith(
            '<h2>'
          ) ||
          block.startsWith(
            '<h3>'
          ) ||
          block ===
            '<hr>'
        ) {

          return block;

        }

        return (
          '<p>' +
          block.replace(
            /\n/g,
            '<br>'
          ) +
          '</p>'
        );

      }
    )
    .join(
      '\n'
    );

}


/* =========================================================
   DOWNLOAD SAVED WORK
   ========================================================= */

function downloadSavedWork(
  index
) {

  const work =
    state.works[
      index
    ];

  if (!work) {
    return;
  }

  const typeLabel =
    work.type ===
      'assistant'

      ? (
          state.lang ===
          'sl'
            ? 'AI pomočnik'
            : 'AI Assistant'
        )

      : work.type ===
        'article'

        ? (
            state.lang ===
            'sl'
              ? 'AI pisanje članka'
              : 'AI Article Writing'
          )

        : work.type ===
          'ask'

          ? (
              state.lang ===
              'sl'
                ? 'Vprašanje knjig'
                : 'Book question'
            )

          : (
              state.lang ===
              'sl'
                ? 'AI predavanje'
                : 'AI Lecture'
            );

  const title =
    String(
      work.title ||
      typeLabel
    ).trim();

  const prompt =
    String(
      work.prompt ||
      ''
    ).trim();

  const content =
    String(
      work.content ||
      ''
    ).trim();

  const contentHtml =
    markdownToHtml(
      content
    );

  const promptHtml =
    prompt
      ? markdownToHtml(
          prompt
        )
      : '';

  const sourceList =
    Array.isArray(
      work.passages
    )
      ? work.passages
          .map(
            passage =>
              `
                <li>

                  ${escapeHtml(
                    passage.bookTitle ||
                    ''
                  )}

                  ${
                    passage.author
                      ? ` — ${escapeHtml(
                          passage.author
                        )}`
                      : ''
                  }

                  ${
                    passage.page
                      ? (
                          state.lang ===
                          'sl'
                            ? ` · stran ${escapeHtml(
                                passage.page
                              )}`
                            : ` · page ${escapeHtml(
                                passage.page
                              )}`
                        )
                      : ''
                  }

                </li>
              `
          )
          .join(
            '\n'
          )
      : '';

  const sourceLabel =
    state.lang ===
    'sl'
      ? 'Viri'
      : 'Sources';

  const questionLabel =
    state.lang ===
    'sl'
      ? 'Vprašanje'
      : 'Request';

  const createdLabel =
    state.lang ===
    'sl'
      ? 'Ustvarjeno'
      : 'Created';

  const htmlDocument = `
<!doctype html>

<html
  lang="${
    state.lang ===
    'sl'
      ? 'sl'
      : 'en'
  }"
>

<head>

<meta charset="utf-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<title>
${escapeHtml(
  title
)}
</title>


<style>

* {
  box-sizing:
    border-box;
}

body {

  margin:
    0;

  padding:
    40px 20px;

  background:
    #f5f2eb;

  color:
    #2d2924;

  font-family:
    Arial,
    sans-serif;

  line-height:
    1.78;

  font-size:
    16px;

}

.page {

  width:
    min(
      920px,
      100%
    );

  margin:
    0 auto;

  background:
    #ffffff;

  padding:
    52px 58px;

  border-radius:
    18px;

  box-shadow:
    0 12px 40px
    rgba(
      0,
      0,
      0,
      0.08
    );

}

h1,
h2,
h3 {

  font-family:
    Georgia,
    serif;

}

h1 {

  font-size:
    2.1rem;

}

h2 {

  margin-top:
    36px;

}

h3 {

  margin-top:
    28px;

}

p {

  margin:
    0 0 18px;

}

.sources {

  margin-top:
    44px;

  padding-top:
    26px;

  border-top:
    1px solid
    #ddd6ca;

}

@media (
  max-width:700px
) {

  body {

    padding:
      0;

    background:
      #ffffff;

  }

  .page {

    width:
      100%;

    padding:
      28px 20px;

    border-radius:
      0;

    box-shadow:
      none;

  }

}

</style>

</head>


<body>

<main class="page">

  <h1>

    ${escapeHtml(
      title
    )}

  </h1>


  <p>

    <strong>

      ${escapeHtml(
        typeLabel
      )}

    </strong>

  </p>


  ${
    prompt
      ? `

        <h3>

          ${escapeHtml(
            questionLabel
          )}

        </h3>

        <div>

          ${promptHtml}

        </div>

      `
      : ''
  }


  <hr>


  <article>

    ${contentHtml}

  </article>


  <section class="sources">

    <h2>

      ${escapeHtml(
        sourceLabel
      )}

    </h2>


    ${
      sourceList

        ? `

          <ul>

            ${sourceList}

          </ul>

        `

        : `

          <p>

            ${
              state.lang ===
              'sl'
                ? 'Viri niso navedeni.'
                : 'No sources listed.'
            }

          </p>

        `
    }

  </section>


  <p>

    <strong>

      ${escapeHtml(
        createdLabel
      )}:

    </strong>


    ${escapeHtml(
      formatWorkDate(
        work.createdAt
      )
    )}

  </p>

</main>

</body>

</html>
  `.trim();


  const blob =
    new Blob(
      [
        htmlDocument
      ],
      {
        type:
          'text/html;charset=utf-8'
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const safeName =
    title
      .replace(
        /[<>:"/\\|?*\x00-\x1F]/g,
        ''
      )
      .replace(
        /\s+/g,
        '-'
      )
      .slice(
        0,
        100
      )
      .trim() ||
    'ai-book-library-work';


  const link =
    document.createElement(
      'a'
    );


  link.href =
    url;


  link.download =
    safeName +
    '.html';


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();


  setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    1000
  );


  toast(
    state.lang ===
    'sl'
      ? 'Delo je preneseno.'
      : 'Work downloaded.'
  );

}


/* =========================================================
   OPEN SAVED WORK
   ========================================================= */

function openSavedWork(
  index
) {

  const work =
    state.works[
      index
    ];

  if (!work) {
    return;
  }


  if (
    work.type ===
    'assistant'
  ) {

    state.creationType =
      'assistant';

    state.assistantPrompt =
      work.prompt ||
      '';

    state.generatedAssistant =
      work.content ||
      '';

    state.assistantPassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.assistantError =
      '';

  }

  else if (
    work.type ===
    'article'
  ) {

    state.creationType =
      'article';

    state.articleTopic =
      work.prompt ||
      work.title ||
      '';

    state.generatedArticle =
      work.content ||
      '';

    state.articlePassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.articleError =
      '';

  }

  else if (
    work.type ===
    'ask'
  ) {

    state.creationType =
      'ask';

    state.askPrompt =
      work.prompt ||
      work.title ||
      '';

    state.generatedAnswer =
      work.content ||
      '';

    state.askPassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.askError =
      '';

  }

  else {

    state.creationType =
      'lecture';

    state.lectureTopic =
      work.prompt ||
      work.title ||
      '';

    state.generatedLecture =
      work.content ||
      '';

    state.lectureLength =
      String(
        work.length ||
        '20'
      );

    state.lecturePassages =
      Array.isArray(
        work.passages
      )
        ? work.passages
        : [];

    state.lectureError =
      '';

  }


  state.lectureGenerating =
    false;

  state.assistantGenerating =
    false;

  state.articleGenerating =
    false;

  state.askGenerating =
    false;

  state.screen =
    'result';

  save();
  render();

  window.scrollTo({

    top:
      0,

    behavior:
      'smooth'

  });

}


/* =========================================================
   REMOVE SAVED WORK
   ========================================================= */

function removeSavedWork(
  index
) {

  if (
    index <
      0 ||
    index >=
      state.works.length
  ) {

    return;

  }

  state.works.splice(
    index,
    1
  );

  save();
  render();

}


/* =========================================================
   AI LECTURE
   ========================================================= */

async function generate() {

  if (
    !state.sources.length
  ) {

    toast(
      t('chooseAtLeastOne')
    );

    return;

  }

  if (
    !state.lectureTopic.trim()
  ) {

    toast(
      t('missingTopic')
    );

    return;

  }

  state.creationType =
    'lecture';

  state.lectureGenerating =
    true;

  state.generatedLecture =
    '';

  state.lectureError =
    '';

  state.lecturePassages =
    [];

  state.screen =
    'result';

  save();
  render();

  try {

    if (
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    const selected =
      findAiPassages(
        state.lectureTopic.trim()
      );

    if (
      !selected.length
    ) {

      throw new Error(
        t('noRelevantPages')
      );

    }

    state.lecturePassages =
      selected;

    save();
    render();

    const response =
      await fetch(
        AI_WORKER_URL,
        {
          method:
            'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body:
            JSON.stringify({

              type:
                'lecture',

              topic:
                state.lectureTopic.trim(),

              prompt:
                state.lectureTopic.trim(),

              language:
                state.lang ===
                'sl'
                  ? 'Slovenščina'
                  : 'English',

              length:
                state.lectureLength,

              passages:
                selected

            })

        }
      );

    const data =
      await response.json();

    if (
      !response.ok ||
      !data ||
      !data.success
    ) {

      throw new Error(
        data?.error ||
        t('lectureError')
      );

    }

    state.generatedLecture =
      String(
        data.lecture ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedLecture
    ) {

      throw new Error(
        t('lectureError')
      );

    }

    saveGeneratedWork({

      type:
        'lecture',

      title:
        state.lectureTopic.trim(),

      prompt:
        state.lectureTopic.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      length:
        state.lectureLength,

      content:
        state.generatedLecture,

      passages:
        state.lecturePassages

    });

    state.lectureGenerating =
      false;

    state.screen =
      'result';

    save();
    render();

  } catch (error) {

    console.error(
      'Lecture generation error:',
      error
    );

    state.lectureGenerating =
      false;

    state.lectureError =
      error?.message ||
      t('lectureError');

    state.screen =
      'result';

    save();
    render();

  }

}


/* =========================================================
   AI ASSISTANT
   ========================================================= */

async function generateAssistant() {

  if (
    !state.assistantPrompt.trim()
  ) {

    toast(
      t('missingAssistant')
    );

    return;

  }

  state.creationType =
    'assistant';

  state.assistantGenerating =
    true;

  state.generatedAssistant =
    '';

  state.assistantError =
    '';

  state.assistantPassages =
    [];

  state.screen =
    'result';

  save();
  render();

  try {

    if (
      BOOKS.length &&
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    let selected =
      [];

    if (
      state.searchReady &&
      state.sources.length
    ) {

      selected =
        findAiPassages(
          state.assistantPrompt.trim()
        );

    }

    state.assistantPassages =
      selected;

    save();
    render();

    const response =
      await fetch(
        AI_WORKER_URL,
        {
          method:
            'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body:
            JSON.stringify({

              type:
                'assistant',

              prompt:
                state.assistantPrompt.trim(),

              language:
                state.lang ===
                'sl'
                  ? 'Slovenščina'
                  : 'English',

              passages:
                selected

            })

        }
      );

    const data =
      await response.json();

    if (
      !response.ok ||
      !data ||
      !data.success
    ) {

      throw new Error(
        data?.error ||
        t('assistantError')
      );

    }

    state.generatedAssistant =
      String(
        data.answer ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedAssistant
    ) {

      throw new Error(
        t('assistantError')
      );

    }

    saveGeneratedWork({

      type:
        'assistant',

      title:
        state.assistantPrompt.trim(),

      prompt:
        state.assistantPrompt.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      content:
        state.generatedAssistant,

      passages:
        state.assistantPassages

    });

    state.assistantGenerating =
      false;

    state.screen =
      'result';

    save();
    render();

  } catch (error) {

    console.error(
      'AI Assistant error:',
      error
    );

    state.assistantGenerating =
      false;

    state.assistantError =
      error?.message ||
      t('assistantError');

    state.screen =
      'result';

    save();
    render();

  }

}


/* =========================================================
   AI ARTICLE WRITING
   ========================================================= */

async function generateArticle() {

  if (
    !state.articleTopic.trim()
  ) {

    toast(
      t('missingArticle')
    );

    return;

  }

  state.creationType =
    'article';

  state.articleGenerating =
    true;

  state.generatedArticle =
    '';

  state.articleError =
    '';

  state.articlePassages =
    [];

  state.screen =
    'result';

  save();
  render();

  try {

    if (
      BOOKS.length &&
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    let selected =
      [];

    if (
      state.searchReady &&
      state.sources.length
    ) {

      selected =
        findAiPassages(
          state.articleTopic.trim()
        );

    }

    state.articlePassages =
      selected;

    save();
    render();

    const response =
      await fetch(
        AI_WORKER_URL,
        {
          method:
            'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body:
            JSON.stringify({

              type:
                'article',

              topic:
                state.articleTopic.trim(),

              prompt:
                state.articleTopic.trim(),

              language:
                state.lang ===
                'sl'
                  ? 'Slovenščina'
                  : 'English',

              minWords:
                10000,

              passages:
                selected

            })

        }
      );

    const data =
      await response.json();

    if (
      !response.ok ||
      !data ||
      !data.success
    ) {

      throw new Error(
        data?.error ||
        t('articleErrorGeneric')
      );

    }

    state.generatedArticle =
      String(
        data.article ||
        data.answer ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedArticle
    ) {

      throw new Error(
        t('articleErrorGeneric')
      );

    }

    saveGeneratedWork({

      type:
        'article',

      title:
        state.articleTopic.trim(),

      prompt:
        state.articleTopic.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      length:
        '10000+',

      content:
        state.generatedArticle,

      passages:
        state.articlePassages

    });

    state.articleGenerating =
      false;

    state.screen =
      'result';

    save();
    render();

  } catch (error) {

    console.error(
      'AI Article generation error:',
      error
    );

    state.articleGenerating =
      false;

    state.articleError =
      error?.message ||
      t('articleErrorGeneric');

    state.screen =
      'result';

    save();
    render();

  }

}


/* =========================================================
   ASK THE BOOKS
   ========================================================= */

async function generateAsk() {

  if (
    !state.sources.length
  ) {

    toast(
      t('chooseAtLeastOne')
    );

    return;

  }

  if (
    !state.askPrompt.trim()
  ) {

    toast(
      t('missingQuestion')
    );

    return;

  }

  state.creationType =
    'ask';

  state.askGenerating =
    true;

  state.generatedAnswer =
    '';

  state.askError =
    '';

  state.askPassages =
    [];

  state.screen =
    'result';

  save();
  render();

  try {

    if (
      !state.searchReady
    ) {

      await buildSearchIndex();

    }

    const selected =
      findAiPassages(
        state.askPrompt.trim()
      );

    if (
      !selected.length
    ) {

      throw new Error(
        t('noRelevantPages')
      );

    }

    state.askPassages =
      selected;

    save();
    render();

    const response =
      await fetch(
        AI_WORKER_URL,
        {
          method:
            'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body:
            JSON.stringify({

              type:
                'ask',

              prompt:
                state.askPrompt.trim(),

              language:
                state.lang ===
                'sl'
                  ? 'Slovenščina'
                  : 'English',

              passages:
                selected

            })

        }
      );

    const data =
      await response.json();

    if (
      !response.ok ||
      !data ||
      !data.success
    ) {

      throw new Error(
        data?.error ||
        t('answerError')
      );

    }

    state.generatedAnswer =
      String(
        data.answer ||
        data.content ||
        ''
      )
        .trim();

    if (
      !state.generatedAnswer
    ) {

      throw new Error(
        t('answerError')
      );

    }

    saveGeneratedWork({

      type:
        'ask',

      title:
        state.askPrompt.trim(),

      prompt:
        state.askPrompt.trim(),

      language:
        state.lang ===
        'sl'
          ? 'Slovenščina'
          : 'English',

      content:
        state.generatedAnswer,

      passages:
        state.askPassages

    });

    state.askGenerating =
      false;

    state.screen =
      'result';

    save();
    render();

  } catch (error) {

    console.error(
      'Ask the Books error:',
      error
    );

    state.askGenerating =
      false;

    state.askError =
      error?.message ||
      t('answerError');

    state.screen =
      'result';

    save();
    render();

  }

}


/* =========================================================
   CREATE SCREEN
   ========================================================= */

function create() {

  const selectedCount =
    state.sources.length;

  if (
    state.lectureGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2
          style="
            margin-top:20px
          ">

          ${
            state.lang ===
            'sl'

              ? 'AI pripravlja predavanje…'

              : 'AI is preparing your lecture…'
          }

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.lectureTopic
          )}

        </div>

      </div>

    `);

  }

  if (
    state.assistantGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2
          style="
            margin-top:20px
          ">

          ${t(
            'assistantPreparing'
          )}

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.assistantPrompt
          )}

        </div>

      </div>

    `);

  }

  if (
    state.articleGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2
          style="
            margin-top:20px
          ">

          ${t(
            'articlePreparing'
          )}

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.articleTopic
          )}

        </div>

        <div
          class="muted"
          style="
            margin-top:10px
          ">

          ${t(
            'articleMinimum'
          )}

        </div>

      </div>

    `);

  }

  if (
    state.askGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2
          style="
            margin-top:20px
          ">

          ${t(
            'answerPreparing'
          )}

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.askPrompt
          )}

        </div>

      </div>

    `);

  }

  return layout(`

    <div class="eyebrow">

      ${t('create')}

    </div>

    <h1>

      ${t('createWork')}

    </h1>

    ${
      BOOKS.length
        ? `

          <div class="section card">

            <div
              style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                gap:12px;
                margin-bottom:14px;
                flex-wrap:wrap
              ">

              <h3
                style="
                  margin:0
                ">

                ${t(
                  'chooseBooks'
                )}

              </h3>

              <div
                style="
                  display:flex;
                  align-items:center;
                  gap:10px;
                  flex-wrap:wrap
                ">

                <span class="muted">

                  ${selectedCount}

                  ${t(
                    'selectedBooks'
                  )}

                </span>

                <button
                  type="button"
                  class="chip ${
                    selectedCount ===
                    BOOKS.length
                      ? ''
                      : 'on'
                  }"
                  onclick="
                    toggleAllLectureSources()
                  ">

                  ${
                    selectedCount ===
                    BOOKS.length
                      ? t(
                          'unselectAll'
                        )
                      : t(
                          'selectAll'
                        )
                  }

                </button>

              </div>

            </div>

            <div
              style="
                display:grid;
                gap:10px
              ">

              ${BOOKS.map(
                (
                  book,
                  index
                ) => {

                  const selected =
                    state.sources.includes(
                      index
                    );

                  return `

                    <button
                      type="button"
                      class="select ${
                        selected
                          ? 'on'
                          : ''
                      }"
                      style="
                        text-align:left;
                        padding:15px;
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        gap:12px
                      "
                      onclick="
                        toggleLectureSource(
                          ${index}
                        )
                      ">

                      <span>

                        <strong>

                          ${escapeHtml(
                            book.short
                          )}

                        </strong>

                      </span>

                      <span
                        style="
                          font-size:20px
                        ">

                        ${
                          selected
                            ? '✓'
                            : '○'
                        }

                      </span>

                    </button>

                  `;

                }
              ).join('')}

            </div>

          </div>

        `

        : `

          <div class="section card">

            <div class="muted">

              ${t('noBooks')}

            </div>

          </div>

        `
    }


    <div
      class="card"
      style="
        margin-top:24px
      ">

      <h2
        style="
          margin:0
        ">

        ${t('aiAssistant')}

      </h2>

      <p
        class="muted"
        style="
          margin-top:8px;
          margin-bottom:18px
        ">

        ${t(
          'assistantDescription'
        )}

      </p>

      <h3>

        ${t(
          'assistantPrompt'
        )}

      </h3>

      <textarea
        class="textarea"
        style="
          margin-top:10px;
          min-height:220px
        "
        oninput="
          setAssistantPrompt(
            this.value
          )
        "
        placeholder="${t(
          'assistantPlaceholder'
        )}">${escapeHtml(
          state.assistantPrompt
        )}</textarea>

      <button
        type="button"
        class="primary"
        style="
          margin-top:16px
        "
        onclick="
          generateAssistant()
        ">

        ✦

        ${t(
          'assistantButton'
        )}

      </button>

    </div>


    ${
      BOOKS.length
        ? `

          <div
            class="card"
            style="
              margin-top:32px
            ">

            <h2
              style="
                margin:0
              ">

              ${t(
                'aiLecture'
              )}

            </h2>

            <p
              class="muted"
              style="
                margin-top:8px;
                margin-bottom:18px
              ">

              ${t(
                'lectureDescription'
              )}

            </p>

            <h3>

              ${t(
                'lectureTopic'
              )}

            </h3>

            <textarea
              class="textarea"
              style="
                margin-top:10px;
                min-height:130px
              "
              oninput="
                setLectureTopic(
                  this.value
                )
              "
              placeholder="${t(
                'lectureTopicPlaceholder'
              )}">${escapeHtml(
                state.lectureTopic
              )}</textarea>

            <h3>

              ${t(
                'lectureLength'
              )}

            </h3>

            <div
              class="formgrid"
              style="
                margin-top:10px
              ">

              ${[
                [
                  '10',
                  t('minutes10')
                ],
                [
                  '20',
                  t('minutes20')
                ],
                [
                  '40',
                  t('minutes40')
                ],
                [
                  '60',
                  t('minutes60')
                ],
                [
                  '120',
                  t('minutes120')
                ]
              ]
                .map(
                  (
                    [
                      value,
                      label
                    ]
                  ) => `

                    <button
                      type="button"
                      class="select ${
                        String(
                          state.lectureLength
                        ) ===
                        String(
                          value
                        )
                          ? 'on'
                          : ''
                      }"
                      onclick="
                        setLectureLength(
                          '${value}'
                        )
                      ">

                      ${label}

                    </button>

                  `
                )
                .join('')}

            </div>

            <h3>

              ${t(
                'lectureLanguage'
              )}

            </h3>

            <div
              class="chips"
              style="
                margin-top:10px
              ">

              <button
                type="button"
                class="chip ${
                  state.lang ===
                  'sl'
                    ? 'on'
                    : ''
                }"
                onclick="
                  setLanguage('sl')
                ">

                🇸🇮 Slovenščina

              </button>

              <button
                type="button"
                class="chip ${
                  state.lang ===
                  'en'
                    ? 'on'
                    : ''
                }"
                onclick="
                  setLanguage('en')
                ">

                🇬🇧 English

              </button>

            </div>

            <button
              type="button"
              class="primary"
              style="
                margin-top:18px
              "
              onclick="
                generate()
              ">

              ✦

              ${t(
                'createLecture'
              )}

            </button>

          </div>

        `
        : ''
    }


    <div
      class="card"
      style="
        margin-top:32px
      ">

      <h2
        style="
          margin:0
        ">

        ${t(
          'articleWriting'
        )}

      </h2>

      <p
        class="muted"
        style="
          margin-top:8px;
          margin-bottom:18px
        ">

        ${t(
          'articleDescription'
        )}

      </p>

      <h3>

        ${t(
          'articleTopic'
        )}

      </h3>

      <textarea
        class="textarea"
        style="
          margin-top:10px;
          min-height:220px
        "
        oninput="
          setArticleTopic(
            this.value
          )
        "
        placeholder="${t(
          'articlePlaceholder'
        )}">${escapeHtml(
          state.articleTopic
        )}</textarea>

      <h3>

        ${t(
          'articleLength'
        )}

      </h3>

      <div
        class="muted"
        style="
          margin-top:10px;
          padding:12px 14px;
          border:1px solid rgba(0,0,0,0.08);
          border-radius:10px;
          line-height:1.5
        ">

        📝

        ${t(
          'articleMinimum'
        )}

      </div>

      <button
        type="button"
        class="primary"
        style="
          margin-top:16px
        "
        onclick="
          generateArticle()
        ">

        ✦

        ${t(
          'createArticle'
        )}

      </button>

    </div>


    ${
      BOOKS.length
        ? `

          <div
            class="section card"
            style="
              margin-top:32px
            ">

            <h2
              style="
                margin:0
              ">

              ${t(
                'askBooks'
              )}

            </h2>

            <p
              class="muted"
              style="
                margin-top:8px;
                margin-bottom:18px
              ">

              ${t(
                'askDescription'
              )}

            </p>

            <div
              class="muted"
              style="
                margin-bottom:18px;
                padding:10px 12px;
                border:1px solid rgba(0,0,0,0.08);
                border-radius:10px;
                line-height:1.5
              ">

              🔒

              ${t(
                'sourceMaterialOnly'
              )}

            </div>

            <h3>

              ${t(
                'askQuestion'
              )}

            </h3>

            <textarea
              class="textarea"
              style="
                margin-top:10px;
                min-height:220px
              "
              oninput="
                setAskPrompt(
                  this.value
                )
              "
              placeholder="${t(
                'askQuestionPlaceholder'
              )}">${escapeHtml(
                state.askPrompt
              )}</textarea>

            <button
              type="button"
              class="primary"
              style="
                margin-top:16px
              "
              onclick="
                generateAsk()
              ">

              ✦

              ${t(
                'askBooksButton'
              )}

            </button>

          </div>

        `
        : ''
    }

  `);

}


/* =========================================================
   RESULT FORMATTING
   ========================================================= */

function formatText(
  text
) {

  const lines =
    String(
      text ||
      ''
    )
      .split(
        /\r?\n/
      );

  return lines
    .map(
      line => {

        const clean =
          line.trim();

        if (!clean) {

          return `
            <div
              style="
                height:10px
              ">
            </div>
          `;

        }

        const escaped =
          escapeHtml(
            clean
          );

        if (
          escaped.startsWith(
            '### '
          )
        ) {

          return `
            <h4
              style="
                margin-top:24px
              ">

              ${escaped.slice(
                4
              )}

            </h4>
          `;

        }

        if (
          escaped.startsWith(
            '## '
          )
        ) {

          return `
            <h3
              style="
                margin-top:28px
              ">

              ${escaped.slice(
                3
              )}

            </h3>
          `;

        }

        if (
          escaped.startsWith(
            '# '
          )
        ) {

          return `
            <h2
              style="
                margin-top:28px
              ">

              ${escaped.slice(
                2
              )}

            </h2>
          `;

        }

        const formatted =
          escaped.replace(
            /\*\*(.*?)\*\*/g,
            '<strong>$1</strong>'
          );

        return `
          <p class="english">

            ${formatted}

          </p>
        `;

      }
    )
    .join('');

}


/* =========================================================
   RESULT SOURCES
   ========================================================= */

function sourceBlock(
  passages
) {

  if (
    !Array.isArray(
      passages
    ) ||
    !passages.length
  ) {

    return '';

  }

  return `

    <div class="card section">

      <h3>

        ${t(
          'sources'
        )}

      </h3>

      <div
        class="muted"
        style="
          margin-top:10px;
          line-height:1.7
        ">

        ${
          passages
            .map(
              (
                passage,
                index
              ) =>
                `${index + 1}. ${
                  escapeHtml(
                    passage.bookTitle ||
                    ''
                  )
                }${
                  passage.author
                    ? ` — ${escapeHtml(
                        passage.author
                      )}`
                    : ''
                }${
                  passage.page
                    ? ` · ${
                        state.lang ===
                        'sl'
                          ? 'stran'
                          : 'page'
                      } ${
                        escapeHtml(
                          passage.page
                        )
                      }`
                    : ''
                }`
            )
            .join(
              '<br>'
            )
        }

      </div>

    </div>

  `;

}


/* =========================================================
   RESULT SCREEN
   ========================================================= */

function result() {

  if (
    state.lectureGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2>

          ${
            state.lang ===
            'sl'

              ? 'AI pripravlja predavanje…'

              : 'AI is preparing your lecture…'
          }

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.lectureTopic
          )}

        </div>

      </div>

    `);

  }


  if (
    state.assistantGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2>

          ${t(
            'assistantPreparing'
          )}

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.assistantPrompt
          )}

        </div>

      </div>

    `);

  }


  if (
    state.articleGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2>

          ${t(
            'articlePreparing'
          )}

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.articleTopic
          )}

        </div>

        <div
          class="muted"
          style="
            margin-top:10px
          ">

          ${t(
            'articleMinimum'
          )}

        </div>

      </div>

    `);

  }


  if (
    state.askGenerating
  ) {

    return layout(`

      <div class="working">

        <div class="dot"></div>

        <h2>

          ${t(
            'answerPreparing'
          )}

        </h2>

        <div class="muted">

          ${escapeHtml(
            state.askPrompt
          )}

        </div>

      </div>

    `);

  }


  if (
    state.creationType ===
    'assistant'
  ) {

    if (
      state.assistantError
    ) {

      return layout(`

        <div class="top">

          <button
            type="button"
            class="back"
            onclick="
              go('create')
            ">

            ‹

          </button>

          <div style="flex:1">

            <strong>

              ${t(
                'aiAssistant'
              )}

            </strong>

          </div>

        </div>

        <div class="section card">

          <h3>

            ${t(
              'assistantError'
            )}

          </h3>

          <p class="muted">

            ${escapeHtml(
              state.assistantError
            )}

          </p>

        </div>

        <button
          type="button"
          class="primary"
          onclick="
            generateAssistant()
          ">

          ✦

          ${t(
            'assistantButton'
          )}

        </button>

      `);

    }

    return layout(`

      <div class="top">

        <button
          type="button"
          class="back"
          onclick="
            go('create')
          ">

          ‹

        </button>

        <div style="flex:1">

          <strong>

            ${t(
              'aiAssistant'
            )}

          </strong>

        </div>

      </div>

      <div
        class="eyebrow"
        style="
          margin-top:10px
        ">

        ${t(
          'aiAssistant'
        )}

      </div>

      <h1>

        ${t(
          'aiAssistant'
        )}

      </h1>

      <div
        class="muted"
        style="
          margin-bottom:22px;
          line-height:1.6
        ">

        ${escapeHtml(
          state.assistantPrompt
        )}

      </div>

      <div class="section">

        ${
          state.generatedAssistant
            ? formatText(
                state.generatedAssistant
              )

            : `

              <div class="muted">

                ${t(
                  'assistantNotCreated'
                )}

              </div>

            `
        }

      </div>

      ${sourceBlock(
        state.assistantPassages
      )}

      <button
        type="button"
        class="primary"
        onclick="
          go('create')
        ">

        ←

        ${t(
          'create'
        )}

      </button>

    `);

  }


  if (
    state.creationType ===
    'article'
  ) {

    if (
      state.articleError
    ) {

      return layout(`

        <div class="top">

          <button
            type="button"
            class="back"
            onclick="
              go('create')
            ">

            ‹

          </button>

          <div style="flex:1">

            <strong>

              ${t(
                'articleWriting'
              )}

            </strong>

          </div>

        </div>

        <div class="section card">

          <h3>

            ${t(
              'articleError'
            )}

          </h3>

          <p class="muted">

            ${escapeHtml(
              state.articleError
            )}

          </p>

        </div>

        <button
          type="button"
          class="primary"
          onclick="
            generateArticle()
          ">

          ✦

          ${t(
            'createArticle'
          )}

        </button>

      `);

    }

    return layout(`

      <div class="top">

        <button
          type="button"
          class="back"
          onclick="
            go('create')
          ">

          ‹

        </button>

        <div style="flex:1">

          <strong>

            ${t(
              'articleWriting'
            )}

          </strong>

        </div>

      </div>

      <div
        class="eyebrow"
        style="
          margin-top:10px
        ">

        ${t(
          'articleWriting'
        )}

      </div>

      <h1>

        ${escapeHtml(
          state.articleTopic
        )}

      </h1>

      <div
        class="muted"
        style="
          margin-bottom:22px
        ">

        ${t(
          'articleMinimum'
        )}

      </div>

      <div class="section">

        ${
          state.generatedArticle
            ? formatText(
                state.generatedArticle
              )

            : `

              <div class="muted">

                ${t(
                  'articleNotCreated'
                )}

              </div>

            `
        }

      </div>

      ${sourceBlock(
        state.articlePassages
      )}

      <button
        type="button"
        class="primary"
        onclick="
          go('create')
        ">

        ←

        ${t(
          'create'
        )}

      </button>

    `);

  }


  if (
    state.creationType ===
    'ask'
  ) {

    if (
      state.askError
    ) {

      return layout(`

        <div class="top">

          <button
            type="button"
            class="back"
            onclick="
              go('create')
            ">

            ‹

          </button>

          <div style="flex:1">

            <strong>

              ${t(
                'askBooks'
              )}

            </strong>

          </div>

        </div>

        <div class="section card">

          <h3>

            ${t(
              'noAnswer'
            )}

          </h3>

          <p class="muted">

            ${escapeHtml(
              state.askError
            )}

          </p>

        </div>

        <button
          type="button"
          class="primary"
          onclick="
            generateAsk()
          ">

          ✦

          ${t(
            'askBooksButton'
          )}

        </button>

      `);

    }

    return layout(`

      <div class="top">

        <button
          type="button"
          class="back"
          onclick="
            go('create')
          ">

          ‹

        </button>

        <div style="flex:1">

          <strong>

            ${t(
              'askBooks'
            )}

          </strong>

          <div class="muted">

            ${state.sources.length}

            ${t(
              'selectedBooks'
            )}

          </div>

        </div>

      </div>

      <div
        class="eyebrow"
        style="
          margin-top:10px
        ">

        ${t(
          'answer'
        )}

      </div>

      <h1>

        ${t(
          'answer'
        )}

      </h1>

      <div
        class="muted"
        style="
          margin-bottom:22px
        ">

        ${escapeHtml(
          state.askPrompt
        )}

      </div>

      <div class="section">

        ${
          state.generatedAnswer

            ? formatText(
                state.generatedAnswer
              )

            : `

              <div class="muted">

                ${t(
                  'answerNotCreated'
                )}

              </div>

            `
        }

      </div>

      ${sourceBlock(
        state.askPassages
      )}

      <button
        type="button"
        class="primary"
        onclick="
          go('create')
        ">

        ←

        ${t(
          'create'
        )}

      </button>

    `);

  }


  if (
    state.lectureError
  ) {

    return layout(`

      <div class="top">

        <button
          type="button"
          class="back"
          onclick="
            go('create')
          ">

          ‹

        </button>

        <div style="flex:1">

          <strong>

            ${t(
              'aiLecture'
            )}

          </strong>

        </div>

      </div>

      <div class="section card">

        <h3>

          ${t(
            'lectureError'
          )}

        </h3>

        <p class="muted">

          ${escapeHtml(
            state.lectureError
          )}

        </p>

      </div>

      <button
        type="button"
        class="primary"
        onclick="
          generate()
        ">

        ✦

        ${t(
          'createLecture'
        )}

      </button>

    `);

  }


  return layout(`

    <div class="top">

      <button
        type="button"
        class="back"
        onclick="
          go('create')
        ">

        ‹

      </button>

      <div style="flex:1">

        <strong>

          ${t(
            'aiLecture'
          )}

        </strong>

        <div class="muted">

          ${state.sources.length}

          ${t(
            'selectedBooks'
          )}

          ·

          ${state.lectureLength}

          min

        </div>

      </div>

    </div>

    <div
      class="eyebrow"
      style="
        margin-top:10px
      ">

      ${t(
        'aiLecture'
      )}

    </div>

    <h1>

      ${escapeHtml(
        state.lectureTopic
      )}

    </h1>

    <div class="section">

      ${
        state.generatedLecture
          ? formatText(
              state.generatedLecture
            )
          : `

            <div class="muted">

              ${
                state.lang ===
                'sl'

                  ? 'Predavanje še ni ustvarjeno.'

                  : 'The lecture has not been generated yet.'
              }

            </div>

          `
      }

    </div>

    ${sourceBlock(
      state.lecturePassages
    )}

    <button
      type="button"
      class="primary"
      onclick="
        go('create')
      ">

      ←

      ${t(
        'create'
      )}

    </button>

  `);

}


/* =========================================================
   SAVED SCREEN
   ========================================================= */

function saved() {

  const works =
    state.works;

  return layout(`

    <h2>

      ${t('saved')}

    </h2>

    <div class="section">

      <div
        style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:12px
        ">

        <h3>

          ${t(
            'works'
          )}

        </h3>

        <span class="muted">

          ${works.length}

        </span>

      </div>

      ${
        works.length

          ? works
              .map(
                (
                  work,
                  index
                ) => {

                  const typeLabel =
                    work.type ===
                    'assistant'

                      ? t(
                          'assistantWork'
                        )

                      : work.type ===
                        'article'

                        ? t(
                            'articleWork'
                          )

                        : work.type ===
                          'ask'

                          ? t(
                              'askWork'
                            )

                          : t(
                              'lectureWork'
                            );

                  const marker =
                    work.type ===
                    'assistant'
                      ? 'AI'
                      : work.type ===
                        'article'
                        ? 'Č'
                        : work.type ===
                          'ask'
                          ? 'Q'
                          : 'A';

                  const title =
                    work.title ||
                    typeLabel;

                  const preview =
                    String(
                      work.content ||
                      ''
                    )
                      .replace(
                        /\s+/g,
                        ' '
                      )
                      .trim();

                  const shortPreview =
                    preview.length >
                    170
                      ? (
                          preview.slice(
                            0,
                            170
                          ) +
                          '…'
                        )
                      : preview;

                  return `

                    <div
                      class="row"
                      style="
                        align-items:flex-start;
                        cursor:pointer
                      "
                      onclick="
                        openSavedWork(
                          ${index}
                        )
                      ">

                      <div class="num">

                        ${marker}

                      </div>

                      <div class="grow">

                        <div
                          style="
                            font-weight:600
                          ">

                          ${escapeHtml(
                            title
                          )}

                        </div>

                        <div
                          class="muted"
                          style="
                            margin-top:4px
                          ">

                          ${typeLabel}

                        </div>

                        ${
                          shortPreview
                            ? `

                              <div
                                style="
                                  margin-top:8px;
                                  line-height:1.5
                                ">

                                ${escapeHtml(
                                  shortPreview
                                )}

                              </div>

                            `
                            : ''
                        }

                        <div
                          class="muted"
                          style="
                            margin-top:8px;
                            font-size:11px
                          ">

                          ${t(
                            'created'
                          )}

                          ·

                          ${escapeHtml(
                            formatWorkDate(
                              work.createdAt
                            )
                          )}

                        </div>

                        <div
                          style="
                            display:flex;
                            gap:8px;
                            margin-top:10px;
                            flex-wrap:wrap
                          ">

                          <button
                            type="button"
                            class="chip on"
                            onclick="
                              event.stopPropagation();

                              openSavedWork(
                                ${index}
                              );
                            ">

                            ${t(
                              'openWork'
                            )}

                          </button>

                          <button
                            type="button"
                            class="chip"
                            onclick="
                              event.stopPropagation();

                              downloadSavedWork(
                                ${index}
                              );
                            ">

                            ${t(
                              'downloadWork'
                            )}

                          </button>

                          <button
                            type="button"
                            class="chip"
                            onclick="
                              event.stopPropagation();

                              removeSavedWork(
                                ${index}
                              );
                            ">

                            ${t(
                              'deleteWork'
                            )}

                          </button>

                        </div>

                      </div>

                    </div>

                  `;

                }
              )
              .join('')

          : `

            <div
              class="muted"
              style="
                padding:18px 0
              ">

              ${t(
                'noSavedWorks'
              )}

            </div>

          `
      }

    </div>

  `);

}


/* =========================================================
   RENDER
   ========================================================= */

function render() {

  const root =
    document.getElementById(
      'app'
    );

  if (!root) {
    return;
  }

  root.innerHTML =

    state.screen ===
    'library'

      ? library()

    : state.screen ===
      'reader'

      ? reader()

    : state.screen ===
      'search'

      ? search()

    : state.screen ===
      'create'

      ? create()

    : state.screen ===
      'result'

      ? result()

    : state.screen ===
      'saved'

      ? saved()

    : library();

}


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.setLanguage =
  setLanguage;

window.go =
  go;

window.toast =
  toast;

window.openBook =
  openBook;

window.openPdf =
  openPdf;

window.setSearchQuery =
  setSearchQuery;

window.setSearchFilter =
  setSearchFilter;

window.openSearchResult =
  openSearchResult;

window.generate =
  generate;

window.generateAssistant =
  generateAssistant;

window.generateArticle =
  generateArticle;

window.generateAsk =
  generateAsk;

window.toggleLectureSource =
  toggleLectureSource;

window.toggleAllLectureSources =
  toggleAllLectureSources;

window.setLectureTopic =
  setLectureTopic;

window.setLectureLength =
  setLectureLength;

window.setAssistantPrompt =
  setAssistantPrompt;

window.setArticleTopic =
  setArticleTopic;

window.setAskPrompt =
  setAskPrompt;

window.openSavedWork =
  openSavedWork;

window.downloadSavedWork =
  downloadSavedWork;

window.removeSavedWork =
  removeSavedWork;

window.save =
  save;

window.render =
  render;

window.loadBooksFromGitHub =
  loadBooksFromGitHub;


/* =========================================================
   START
   ========================================================= */

render();

loadBooksFromGitHub();
