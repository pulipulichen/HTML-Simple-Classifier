export default function (options = {}) {
  let {
    key,
    name,
    callback
  } = options

  return {
    key,
    name: function name() {
      return name
    },
    callback: function callback(event, coords, th) {
      callback(event, coords, th)
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
}