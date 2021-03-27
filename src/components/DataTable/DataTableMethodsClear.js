export default function (DataTable) {
  
  DataTable.methods.clearPredictColumn = async function () {
    //this.utils.AsyncUtils.sleep(0)
    //return console.error('[TODO] clearPredictColumn')
    /*
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
    
    
     */
    this.hotInstance.selectColumns(1,1)
    this.unlockPredictColumn()
    this.hotInstance.emptySelectedCells()
    this.lockPredictColumn()
    
    this.hotInstance.deselectCell()
  }
  
  DataTable.methods.lockPredictColumn = function () {
    this.predictColumnLocker = true
    this.hotInstance.updateSettings({
      cells: (row, col) => {
        return this.onHotCellUpdateSettings(row, col)
      }
    })
  }
  
  DataTable.methods.unlockPredictColumn = function () {
    this.predictColumnLocker = false
    this.hotInstance.updateSettings({
      cells: (row, col) => {
        return this.onHotCellUpdateSettings(row, col)
      }
    })
  }
  
  DataTable.methods.isMissingData = function (cell) {
    //return (cell === '?' || cell === null || cell === undefined)
    return this.utils.DataUtils.isMissingData(cell)
  }
  
  DataTable.methods.clearTestPredictColumn = async function () {
    //return console.error('[TODO]')
    /*
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
    */
    
    let coords = []
    for (let len = this.localConfig.data.length - 1, i = len; i > 0; i--) {
      let index = (len - i)
      let row = this.localConfig.data[index]
      
      if (this.isMissingData(row[0])) {
        coords.push([index, 1, index, 1])
      }
      
      if (i % 10 === 5) {
        this.utils.AsyncUtils.sleep(0)
      }
    }
    this.hotInstance.selectCells(coords)
    
    this.unlockPredictColumn()
    this.hotInstance.emptySelectedCells()
    this.lockPredictColumn()
    
    this.hotInstance.selectCells([])
  }
}