const fonts = {
  IPAexMincho: {
    normal: 'fonts/ipaexm.ttf',
    bold: 'fonts/ipaexm.ttf',
    italics: 'fonts/ipaexm.ttf',
    bolditalics: 'fonts/ipaexm.ttf'
  }
};
const PdfPrinter = require('pdfmake/src/printer');
const printer = new PdfPrinter(fonts);
const fs = require('fs');

function mm2pt(v) {
  return v * 2.8346;
}

const docDefinition = {
  pageSize: { width: mm2pt(100), height: mm2pt(148) }, // 100 x 148 mm
  pageMargins: [0, 0, 0, 0],
  defaultStyle: {
    font: 'IPAexMincho'
  },
  content: [
    {
      text: 'あ',
      absolutePosition: { x: mm2pt(10), y: mm2pt(20) },
      fontSize: 50
    },
    {
      text: 'い',
      absolutePosition: { x: mm2pt(10), y: mm2pt(20) + 50 },
      fontSize: 50
    },
    {
      canvas: [
        {
          type: 'rect',
          x: mm2pt(10),
          y: mm2pt(20),
          w: 50,
          h: 50
        }
      ]
    }
  ]
};
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
pdfDoc.end();
