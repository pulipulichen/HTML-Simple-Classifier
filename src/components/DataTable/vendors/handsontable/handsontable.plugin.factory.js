export default function (options = {}) {
  let {
    key,
    name,
    callback
  } = options

  return {
    key,
    name: function () {
      return name()
    },
    callback: function (event, coords, th) {
      callback(event, coords, th)
    },
    disabled: function () {
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
}