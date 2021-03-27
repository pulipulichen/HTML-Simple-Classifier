export default function (ConfigurationPanel) {
  ConfigurationPanel.computed.headers = function () {
      return this.localConfig.headers.filter(header => header !== 'predict')
  }
  ConfigurationPanel.computed.isModelBuilded = function () {
    return (this.localConfig.modelJSON !== null && this.localConfig.modelJSON !== '{}')
  }
  ConfigurationPanel.computed.hasModelEvaluated = function () {
    return (this.localConfig.modelEvaluations.length > 0)
  }
  
  ConfigurationPanel.computed.isNeedPredict = function () {
    for (let len = this.localConfig.data.length - 1, i = len; i > 0; i--) {
      let predict = this.localConfig.data[(len - i)][1]
      if (this.utils.DataUtils.isMissingData(predict)) {
        return true
      }
    }
    return false
  }
}