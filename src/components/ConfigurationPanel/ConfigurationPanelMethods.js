export default function (ConfigurationPanel) {
  ConfigurationPanel.methods.startPredict = async function () {
    while (this.config.inited === false
            || !this.$refs.Classifier) {
      await this.utils.AsyncUtils.sleep(100)
    }
    
    this.$refs.Classifier.startPredict()
  }
}