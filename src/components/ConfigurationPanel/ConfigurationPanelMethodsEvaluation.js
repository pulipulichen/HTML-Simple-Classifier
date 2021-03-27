export default function (ConfigurationPanel) {
  ConfigurationPanel.methods.resetModelEvaluation = function () {
    this.localConfig.modelEvaluations = this.localConfig.modelEvaluations.splice(0,0)
    return true
  }
    
  ConfigurationPanel.methods.calcAccuracy = async function (classes, predicts) {
    if (classes.length !== predicts.length) {
      console.error(`Non-match: ${classes.length} vs ${predicts.length}`)
    }
    
    let len = classes.length
    let matchCounter = 0
    for (let i = len; i > 0; i--) {
      let index = (len - i)
      if (classes[index] === predicts[index]) {
        matchCounter++
      }
      
      if (i & 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return matchCounter / len
  }
  
}