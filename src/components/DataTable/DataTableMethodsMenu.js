export default function (DataTable) {
  DataTable.methods.renameColHeader = function (event, coords, th) {
    let index = coords[0].start.col

    let instance = this.hotInstance
    let headers = instance.getColHeader()

    let header = headers[index]
    
    //let newHeader = window.prompt('Rename column header', header)
    let newHeader = window.prompt(this.$t('Rename column header'), header)
    if (typeof(newHeader) !== 'string' || newHeader.trim() === '') {
      return this
    }

    headers[index] = newHeader
    //this.localConfig.headers[index]
    //this.localConfig.headers[index] = newHeader
    
    let savedHeader = this.localConfig.headers
    savedHeader[index] = newHeader
    this.localConfig.headers = this.localConfig.headers.splice(0,0).concat(savedHeader)

    //console.log(headers)

    //console.log(instance.getColHeader())
    instance.updateSettings({
      modifyColWidth: () => {},
      colHeaders: headers
    })
  }
}