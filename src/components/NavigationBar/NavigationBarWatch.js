export default function (NavigationBar) {
    
  NavigationBar.watch['localConfig.locale'] = async function () {
    this.$i18n.locale = this.localConfig.locale
  }
  
  
}