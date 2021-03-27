import $ from 'jquery'

export default function (NavigationBar) {
  NavigationBar.methods.initDropdown = async function () {
    while (!this.$refs.LoadDemoDropdown || !$.isSemanticNIWSFReady) {
      await this.utils.AsyncUtils.sleep()
    }
    $(this.$refs.LoadDemoDropdown).dropdown()
  }
    
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