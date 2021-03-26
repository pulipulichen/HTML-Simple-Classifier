export default function (DataTable) {
  
  DataTable.methods.clearPredictColumn = async function () {
    let data = []
    
    for (let len = this.localConfig.data.length - 1, i = len; i > 0; i--) {
      let row = this.localConfig.data[(len - i)]
      
      row[1] = null
      data.push(row)
      
      if (i % 10 === 5) {
        this.utils.AsyncUtils.sleep(0)
      }
    }
    
    this.localConfig.data = this.localConfig.data.splice(0,0).concat(data)
    
    this.hotInstance.deselectCell()
  }
  
  DataTable.methods.isMissingData = function (cell) {
    return (cell === '?' || cell === null || cell === undefined)
  }
  
  DataTable.methods.clearTestPredictColumn = async function () {
    let data = []
    let changed = false
    
    for (let len = this.localConfig.data.length - 1, i = len; i > 0; i--) {
      let row = this.localConfig.data[(len - i)]
      
      if (this.isMissingData(row[0])) {
        row[1] = null
        changed = true
      }
      data.push(row)
      
      if (i % 10 === 5) {
        this.utils.AsyncUtils.sleep(0)
      }
    }
    
    if (changed) {
      this.localConfig.data = this.localConfig.data.splice(0,0).concat(data)
    }
    
    this.hotInstance.deselectCell()
  }
}