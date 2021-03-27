import XLSX from 'xlsx'

export default function (NavigationBar) {
  
  NavigationBar.methods.loadURLODS = function (url) {

    return new Promise((resolve) => {
      /* set up async GET request */
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "arraybuffer";

      req.onload = async (e) => {
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {type:"array"});

        resolve(await this.processXLSXData(workbook))
      }

      req.send();
    })
  }
  
  NavigationBar.methods.loadFileODS = async function (file) {
    let reader = new FileReader();
    return new Promise((resolve) => {
      reader.readAsArrayBuffer(file);
      reader.onload = async (e) => {
        var data = new Uint8Array(reader.result);
        var workbook = XLSX.read(data, {type: "array"})
        resolve(await this.processXLSXData(workbook))
      }
    })
  }
  
  NavigationBar.methods.processXLSXData = async function (workbook) {
    
    var sheet_name_list = workbook.SheetNames;

    //console.log(url)
    //console.log(sheet_name_list)
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    let headers
    
    for (let len = xlData.length, i = len; i > 0; i--) {
      let rowIndex = (len - i)
      let row = xlData[rowIndex]
      if (!headers) {
        headers = Object.keys(row)
      }
      xlData[rowIndex] = headers.map(header => {
        return row[header]
      })
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    xlData.unshift(headers)

    xlData = await this.utils.DataUtils.parseNumber(xlData)
    return xlData
  }
  
  NavigationBar.methods.saveFileODS = async function () {
    let arrayJSON = await this.dataToArrayJSON()
    // export json to Worksheet of Excel
    // only array possible
    var data = XLSX.utils.json_to_sheet(arrayJSON) 

    // A workbook is the name given to an Excel file
    var wb = XLSX.utils.book_new() // make Workbook of Excel

    // add Worksheet to Workbook
    // Workbook contains one or more worksheets
    XLSX.utils.book_append_sheet(wb, data, 'data') // sheetAName is name of Worksheet
    
    // export Excel file
    
    let filename = this.getFilenameWithTime('ods')
    
    XLSX.writeFile(wb, filename) // name of the file is 'book.xlsx'
  }
}