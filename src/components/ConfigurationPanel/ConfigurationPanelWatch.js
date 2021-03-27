export default function (ConfigurationPanel) {
  ConfigurationPanel.watch['localConfig.locale'] = function () {
    this.$i18n.locale = this.localConfig.locale;
  }
  
  ConfigurationPanel.watch['localConfig.classFieldName'] = function () {
    this.localConfig.modelJSON = null
  }
  
  ConfigurationPanel.watch['localConfig.modelJSON'] = function () {
    this.resetModelEvaluation()

    //console.log(this.isModelWindowOpened, this.modelWindow)
    if (this.isModelWindowOpened) {
      //this.modelWindow.close()
      //this.modelWindow = null
      this.modelWindow.clearHTML()
      this.modelWindow.setTitle(this.$t('No Model'))
    }
  }
}