import $ from 'jquery'
import Papa from 'papaparse'

export default function (NavigationBar) {
  NavigationBar.methods.initDropdown = async function () {
    while (!this.$refs.LoadDemoDropdown || !$.isSemanticNIWSFReady) {
      await this.utils.AsyncUtils.sleep()
    }
    $(this.$refs.LoadDemoDropdown).dropdown()
    $(this.$refs.SaveFileDropdown).dropdown()
  }
    
  NavigationBar.methods.onSearch = function (event) {
    window.alert('TODO: Search ' + this.localConfig.searchKeyword)
    //console.log(event)
    return false
  }
  
  NavigationBar.methods.saveFile = async function (format) {
    
    if (format === 'csv') {
      this.saveFileCSV()
    }
    else if (format === 'ods') {
      this.saveFileODS()
    }
    else {
      window.alert(this.$t('Incorrect format: ') + format)
    }
  }
  
  NavigationBar.methods.openFile = async function (event) {
    //console.log(1);
    if (!window.FileReader) {
      console.error(this.$t('Browser is not compatible'))
      return false // Browser is not compatible
    }

    //var reader = new FileReader();

    let file = event.target.files[0]
    this.localConfig.filename = file.name
    
    this.config.loadingProgress = 0
    
    let rawData
    if (this.localConfig.filename.endsWith('.csv')) {
      rawData = await this.loadFileCSV(file)
    }
    else if (this.localConfig.filename.endsWith('.ods')) {
      rawData = await this.loadFileODS(file)
    }
    
    await this.processRawData(rawData)
  }
}