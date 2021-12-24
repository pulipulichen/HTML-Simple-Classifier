import PuliPostMessageAPI from './vendors/puli-post-message-api/puli-post-message-api.js'

export default function (Index) {
  Index.methods.initPostMessageAPI = function () {
    window.addEventListener("message", (event) => {
      if (!this.validateReceiveMessage(event)) {
        return false
      }
      this.receiveMessage(event.data)
    }, true);
    
    this.postMessageAPI = PuliPostMessageAPI()
    
    this.postMessageAPI.addReceiveListener((data) => {
      this.receiveMessage(data)
    })
  }

  Index.methods.validateReceiveMessage = function (event) {
    //console.log(event)
    if (!(event.data)
            && typeof event.data === 'object') {
      return false
    }
    return true
  }

  let received = false
  Index.methods.receiveMessage = async function (data) {
    if (received === true) {
      return false
    }
    received = true
    if (data.data) {
      data = data.data
    }
    let {rawData, config } = data
    
    if (Array.isArray(rawData) === false || rawData.length < 3) {
      return false
    }
    
    await this.processRawData(rawData)
    await this.processConfig(config)
    await this.startPredict()
  }
  
  Index.methods.processConfig = async function (config) {
    //this.localConfig.data = data.t
    while (this.config.inited === false
            || !this.$refs.NavigationBar
            || !this.$refs.NavigationBar.processRawData) {
      await this.utils.AsyncUtils.sleep(100)
    }
    
    if (config.classifier) {
      this.localConfig.classifier = config.classifier
    }
  }
  
  Index.methods.processRawData = async function (rawData) {
    //this.localConfig.data = data.t
    while (this.config.inited === false
            || !this.$refs.NavigationBar
            || !this.$refs.NavigationBar.processRawData) {
      await this.utils.AsyncUtils.sleep(100)
    }
    
    await this.$refs.NavigationBar.processRawData(rawData)
  }
  
  Index.methods.startPredict = async function () {
    //this.localConfig.data = data.t
    while (this.config.inited === false
            || !this.$refs.ConfigurationPanel) {
      await this.utils.AsyncUtils.sleep(100)
    }
    
    await this.$refs.ConfigurationPanel.startPredict()
  }
}