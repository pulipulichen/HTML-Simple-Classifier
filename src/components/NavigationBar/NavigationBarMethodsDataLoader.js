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
      Papa.parse(url, {
        download: true,
        step: function(row) {
          data.push(row.data)
        },
        complete: function() {
          //console.log(data)
          resolve(data)
        }
      });
    })
  }
  
  
  NavigationBar.methods.loadURLODS = function (url) {
//    if (url.startsWith('./')) {
//      let currentURL = location.href
//      url = currentURL.slice(0, currentURL.lastIndexOf('/') + 1) + url.slice(2)
//    }
    
    //console.log(url)
    
    return new Promise((resolve) => {
      /* set up async GET request */
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "arraybuffer";

      req.onload = function(e) {
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {type:"array"});

        var sheet_name_list = workbook.SheetNames;

        //console.log(url)
        //console.log(sheet_name_list)
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        let headers
        xlData = xlData.map((row) => {
          if (!headers) {
            headers = Object.keys(row)
          }
          return headers.map(header => {
            return row[header]
          })
        })
        xlData.unshift(headers)


        resolve(xlData)
      }

      req.send();
      
    })
  }
}