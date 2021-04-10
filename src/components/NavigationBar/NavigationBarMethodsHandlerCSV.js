import Papa from 'papaparse'

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
        dynamicTyping: true,
        step: function(row) {
          if (Array.isArray(row.data)) {
            if (!fieldCount) {
              fieldCount = row.data.length
            }
            if (fieldCount !== row.data.length) {
              return false
            }
            console.log('Papa parse', row.data.length)
            data.push(row.data)
          }
        },
        complete: async () => {
          console.log('Papa完成')
          //data = await this.utils.DataUtils.parseNumber(data)
          //console.log('parseNumber完成')
          resolve(data)
        }
      })
    })
  }
  
  NavigationBar.methods.saveFileCSV = async function () {
    this.config.loadingProgress = 0
    let arrayJSON = await this.dataToArrayJSON()
    this.config.loadingProgress = 0.5
    //console.log(arrayJSON)
    var csv = Papa.unparse(arrayJSON)
    
    this.config.loadingProgress = 0.7
    let filename = this.getFilenameWithTime('csv')

//    var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
//    var csvURL
////    if (navigator.msSaveBlob) {
////      csvURL = navigator.msSaveBlob(csvData, filename);
////    } else {
////      csvURL = window.URL.createObjectURL(csvData);
////    }
//    
//    csvURL = window.URL.createObjectURL(csvData);

    this.config.loadingProgress = 1
    this.utils.FileUtils.download(filename, csv)
    
  }
}