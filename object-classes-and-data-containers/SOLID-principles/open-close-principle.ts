// class Printer {
//   printPDF(data: any) {
//     // ...
//   }

//   printWebDocument(data: any) {
//     // ...
//   }

//   printPage(data: any) {
//     // ...
//   }

//   verifyData(data: any) {
//     // ...
//   }
// }

interface Printer{
    print(data:any);
}

abstract class PrinterImpl{
    verifyData(data:any){}
}

class PDFPrinter extends PrinterImpl implements Printer{ 
    print(data:any){}
}

class WebPrinter extends PrinterImpl implements Printer{
    print(data:any){}
}

class PagePrinter extends PrinterImpl implements Printer{
    print(data:any){}
}