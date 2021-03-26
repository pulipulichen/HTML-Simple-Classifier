export default {
  key: 'rename_col_header',
  name: function name() {
    return "Rename column header"
  },
  callback: function callback(event, coords, th) {
    let index = coords[0].start.col

    let instance = this
    let headers = instance.getColHeader()

    let header = headers[index]
    
    //let newHeader = window.prompt('Rename column header', header)
    let newHeader = window.prompt('Rename column header', header)
    if (typeof(newHeader) !== 'string' || newHeader.trim() === '') {
      return this
    }

    headers[index] = newHeader

    //console.log(headers)

    //console.log(instance.getColHeader())
    instance.updateSettings({
      modifyColWidth: () => {},
      colHeaders: headers
    })

  },
  disabled: function disabled() {
    /*
     var selected = (0, _utils.getValidSelection)(this);
     var totalColumns = this.countCols();
     
     if (!selected) {
     return true;
     }
     
     return this.selection.isSelectedByRowHeader() || this.selection.isSelectedByCorner() || !this.isColumnModificationAllowed() || !totalColumns;
     */
    return false
  },
  hidden: function hidden() {
    //return !this.getSettings().allowRemoveColumn;
    return false
  }
}