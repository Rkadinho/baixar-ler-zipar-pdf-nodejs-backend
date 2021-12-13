const fs = require('fs');
PDFParser = require("pdf2json");

const analisarPdf = new PDFParser(this,1);

analisarPdf.on("pdfParser_dataError", 
errData => console.error(errData.parserError) );

analisarPdf.on("pdfParser_dataReady", pdfData => {
  fs.writeFile("./Padrão Tiss Atualizado 2021-11.csv", analisarPdf.getRawTextContent(), 
  ()=>{console.log("Pdf convertido!");});
});

analisarPdf.loadPDF("./Pdfs/Padrão Tiss Atualizado 2021-11.pdf");