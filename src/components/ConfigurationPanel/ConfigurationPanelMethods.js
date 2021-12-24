export default function (ConfigurationPanel) {
  ConfigurationPanel.methods.startPredict = async function () {
    while (this.config.inited === false
            || !this.$refs.Classifier) {
      await this.utils.AsyncUtils.sleep(100)
    }
    
    this.$refs.Classifier.startPredict()
  }
  
  ConfigurationPanel.methods.clearPrediction = async function () {
    /*
    for (let len = this.localConfig.data.length - 1, i = len; i > 0; i--) {
      this.localConfig.data[(len - i)][1] = ''
    }
    */
    this.$parent.$refs.DataTable.clearPredictColumn()
  }
}