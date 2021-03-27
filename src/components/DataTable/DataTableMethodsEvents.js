export default function (DataTable) {
  DataTable.methods.initTableEvents = function () {
    //console.log(this.hotInstance)
    this.hotInstance.addHook('afterChange', () => {
      this.onHotAfterChange()
    })

    this.hotInstance.addHook('afterOnCellMouseUp', (event) => {
      this.onHotBeforeContextMenuSetItems(event)
    })
    
    this.hotInstance.updateSettings({
      cells: (row, col) => {
        return this.onHotCellUpdateSettings(row, col)
      }
    })
    
    this.hotInstance.addHook('beforeChange', (event) => {
      this.onHotBeforeChange(event[0])
    })
  }
  
  // ----------------------
  
  DataTable.methods.onHotAfterChange = function () {
    if (this.config.isDataProcessing) {
      return false
    }
    
    if (this.dataLock === true) {
      return false
    }
    let data = this.hotInstance.getData()
    data = data.splice(0, data.length - 1)
    this.dataLock = true
    //console.log(data)
    this.localConfig.data = data
    this.dataLock = false
  }
  
  DataTable.methods.getSelectedRangeInfo = function () {
    if (this.config.isDataProcessing) {
      return false
    }
    
    let range = this.hotInstance.getSelectedRange()
    if (!range) {
      return {
        leftColumn: -1,
        isSelectedColumn: false,
        isSelectedRow: false,
      }
    }
    
    let from = range[0].from.col
    let to = range[0].from.to
    let colRange = [from, to]
    colRange.sort()
    return {
      leftColumn: colRange[0],
      isSelectedColumn: (range[0].from.row === -1),
      isSelectedRow: (range[0].from.col === -1),
    }
  }
  
  DataTable.methods.onHotBeforeContextMenuSetItems = function (event) {
    if (this.config.isDataProcessing) {
      return false
    }
    
    let selectedInfo = this.getSelectedRangeInfo()
    
    //this.hotContextMenuEvent = event
    if (selectedInfo.isSelectedRow) {
      this.hotContextMenu = this.hotContextMenuColumnsReadOnly
    }
    else if (selectedInfo.isSelectedColumn) {
      if (selectedInfo.leftColumn === 0) {
        this.hotContextMenu = this.hotContextMenuSelectedColumnReadOnly
      }
      else if (selectedInfo.leftColumn === 1) {
        this.hotContextMenu = this.hotContextMenuSelectedColumnClearReadOnly
      } 
      else {
        this.hotContextMenu = this.hotContextMenuSelectedColumnDefault
      }
    }
    else {
      if (selectedInfo.leftColumn < 2) {
        this.hotContextMenu = this.hotContextMenuColumnsReadOnly
      } else {
        this.hotContextMenu = this.hotContextMenuDefault
      }
    }
    
    if (selectedInfo.leftColumn === 1) {
      this.hotDropdownMenu = this.hotPredictColumnDropdownMenu
    } 
    else {
      this.hotDropdownMenu = this.hotDropdownMenuDefault
    }
  }
  
  DataTable.methods.onHotCellUpdateSettings = function (row, col) {
    if (this.config.isDataProcessing) {
      return false
    }
    
    let cellProperties = {}

    let classNameList = []

    if ((col === 0 || col === 1) 
            && this.localConfig.data[row]
            && this.isMissingData(this.localConfig.data[row][0])) {
      classNameList.push('test-dataset')
    }
    
    if (col === 1
            && this.localConfig.data[row]
            && this.localConfig.data[row][0] !== this.localConfig.data[row][1]) {
      classNameList.push('incorrect-answer')
    }
    
    if (classNameList.length > 0) {
      cellProperties.className = classNameList.join(' ')
    }

    if (col === 1 && this.predictColumnLocker) {
      cellProperties.readOnly = true;
    }
    return cellProperties;
  }
  
  DataTable.methods.onHotBeforeChange = async function (changes) {
    if (this.config.isDataProcessing) {
      return false
    }
    
    let row = changes[0]
    let col = changes[1]
    let before = changes[2]
    let after = changes[3]
    
    if (this.isMissingData(before) 
            && this.isMissingData(after)) {
      return false
    }
    
    if (col === 1) {
      return false
    }
    
    let isTrainSet = !this.isMissingData(this.localConfig.data[row][0])
    
    //console.log(this.localConfig.data[row][0])
    if (isTrainSet) {
      this.localConfig.modelJSON = null
      await this.utils.AsyncUtils.sleep()
      this.clearPredictColumn()
    }
    else {
      this.localConfig.data[row][1] = null
    }
  }
}