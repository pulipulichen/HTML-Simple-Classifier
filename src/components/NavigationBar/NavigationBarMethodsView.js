export default function (NavigationBar) {
  NavigationBar.methods.onSearch = function (event) {
    window.alert('TODO: Search ' + this.localConfig.searchKeyword)
    //console.log(event)
    return false
  }
  
  NavigationBar.methods.saveFile = function () {
    window.alert('TODO')
  }
  
  NavigationBar.methods.openFile = function () {
    window.alert('TODO')
  }
}