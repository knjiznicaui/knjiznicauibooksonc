(async function () {
  const pdfjsLib = await import(
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.min.mjs'
  );

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@6.2.108/build/pdf.worker.min.mjs';

  const pdfPath = 'books/Bhakti-rasāmṛta-sindhu.pdf';

  const box = document.createElement('div');

  box.style.position = 'fixed';
  box.style.left = '20px';
  box.style.right = '20px';
  box.style.bottom = '20px';
  box.style.maxHeight = '70vh';
  box.style.overflow = 'auto';
  box.style.padding = '20px';
  box.style.background = '#ffffff';
  box.style.color = '#111111';
  box.style.zIndex = '99999';
  box.style.border = '2px solid #333';
  box.style.borderRadius = '12px';
  box.style.fontFamily = 'sans-serif';
  box.style.lineHeight = '1.5';

  box.innerHTML = '<strong>PDF.js TEST — berem knjigo ...</strong>';

  document.body.appendChild(box);

  try {
    const loadingTask = pdfjsLib.getDocument({
      url: pdfPath,
      enableScripting: false
    });

    const pdf = await loadingTask.promise;

    let totalCharacters = 0;
    let pagesWithText = 0;
    let firstText = '';
    let lastText = '';

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();

      const text = content.items
        .map(item => item.str || '')
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();

      totalCharacters += text.length;

      if (text.length > 0) {
        pagesWithText++;

        if (!firstText) {
          firstText = text;
        }

        lastText = text;
      }

      if (
        pageNumber === 1 ||
        pageNumber === 20 ||
        pageNumber % 25 === 0 ||
        pageNumber === pdf.numPages
      ) {
        box.innerHTML =
          '<strong>PDF.js TEST — berem knjigo ...</strong><br><br>' +
          'Prebrana stran: ' +
          pageNumber +
          ' / ' +
          pdf.numPages +
          '<br>' +
          'Strani z besedilom: ' +
          pagesWithText +
          '<br>' +
          'Skupaj prebranih znakov: ' +
          totalCharacters.toLocaleString() +
          '<br><br>' +
          'Počakaj, da se prebere vseh ' +
          pdf.numPages +
          ' strani ...';
      }
    }

    console.log('PDF.js TEST — CELOTNA KNJIGA USPEŠNO PREBRANA');
    console.log('PDF:', pdfPath);
    console.log('Število strani:', pdf.numPages);
    console.log('Strani z besedilom:', pagesWithText);
    console.log('Skupaj znakov:', totalCharacters);
    console.log('Primer prve strani z besedilom:', firstText.slice(0, 1000));
    console.log('Primer zadnje strani z besedilom:', lastText.slice(0, 1000));

    box.innerHTML =
      '<strong>PDF.js TEST — CELOTNA KNJIGA USPEŠNO PREBRANA ✅</strong><br><br>' +
      '<strong>PDF:</strong> ' +
      pdfPath +
      '<br>' +
      '<strong>Število strani:</strong> ' +
      pdf.numPages +
      '<br>' +
      '<strong>Strani z besedilom:</strong> ' +
      pagesWithText +
      '<br>' +
      '<strong>Skupaj prebranih znakov:</strong> ' +
      totalCharacters.toLocaleString() +
      '<br><br>' +
      '<strong>Primer besedila:</strong><br>' +
      firstText.slice(0, 1000);
  } catch (error) {
    console.error('PDF.js TEST — NAPAKA ❌', error);

    box.innerHTML =
      '<strong>PDF.js TEST — NAPAKA ❌</strong><br><br>' +
      String(error);
  }
})();
