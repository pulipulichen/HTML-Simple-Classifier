export default function (DataTable) {
  DataTable.methods.initTable = function () {
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
    
  }
  
  DataTable.methods.onHotAfterChange = function () {
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
    let range = this.hotInstance.getSelectedRange()
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
  }
  
  DataTable.methods.onHotCellUpdateSettings = function (row, col) {
    let cellProperties = {}

    let classNameList = []

    if ((col === 0 || col === 1) 
            && (this.localConfig.data[row][0] === '?')) {
      classNameList.push('test-dataset')
    }
    
    if (col === 1
            && this.localConfig.data[row][0] !== this.localConfig.data[row][1]) {
      classNameList.push('incorrect-answer')
    }
    
    if (classNameList.length > 0) {
      cellProperties.className = classNameList.join(' ')
    }

    if (col === 1) {
      cellProperties.readOnly = true;
    }
    return cellProperties;
  }
}