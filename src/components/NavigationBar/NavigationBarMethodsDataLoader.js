import Papa from 'papaparse'
import XLSX from 'xlsx'

export default function (NavigationBar) {
  
  NavigationBar.methods.loadURLCSV = function (url) {
//    if (url.startsWith('./')) {
//      let currentURL = location.href
//      url = currentURL.slice(0, currentURL.lastIndexOf('/') + 1) + url.slice(2)
//    }
    
    //console.log(url)
    
    return new Promise((resolve) => {
      let data = []
      let fieldCount
      Papa.parse(url, {
        download: true,
        step: function(row) {
          if (Array.isArray(row.data)) {
            if (!fieldCount) {
              fieldCount = row.data.length
            }
            if (fieldCount !== row.data.length) {
              return false
            }
            //console.log(row.data.length)
            data.push(row.data)
          }
        },
        complete: async () => {
          data = await this.utils.DataUtils.parseNumber(data)
          resolve(data)
        }
      });
    })
  }
  
  NavigationBar.methods.loadFileCSV = function (file) {

    return new Promise((resolve) => {
      let data = []
      let fieldCount
      Papa.parse(event.target.files[0], {
        worker: true, // Don't bog down the main thread if its a big file
        step: function(row) {
          if (Array.isArray(row.data)) {
            if (!fieldCount) {
              fieldCount = row.data.length
            }
            if (fieldCount !== row.data.length) {
              return false
            }
            //console.log(row.data.length)
            data.push(row.data)
          }
        },
        complete: async () => {
          data = await this.utils.DataUtils.parseNumber(data)
          resolve(data)
        }
      })
    })
  }
  
  
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
}