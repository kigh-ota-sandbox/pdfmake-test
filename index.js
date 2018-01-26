const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
  }
};
const PdfPrinter = require('pdfmake/src/printer');
const printer = new PdfPrinter(fonts);
const fs = require('fs');

const docDefinition = {
  content: [
    'First paragraph',
    'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
  ]
};
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
pdfDoc.end();
