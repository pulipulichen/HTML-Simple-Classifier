export default function (DecisionTree) {
  DecisionTree.methods.showModel = async function () {
    if (!this.model) {
      await this.start()
      //console.error('no this.model')
      //return false
    }
    //console.log('ok')
    //console.log(this.model)
    let bodyHTML = await this.model.treeToHtml()
    //console.log('ok2')
    bodyHTML = `<div class="tree">${bodyHTML}</div>`
    //console.error('[TODO]')
    //console.log()
    let title = this.$t('Decision Tree') + ` (` + (new Date()).mmddhhmm() + ')'
    
    let modelWindow = this.utils.PopupUtils.open({
      windowName: 'DecisionTreeModelShow' + this.config.modelBuildedTime,
      cssURL: this.modelCSSURL,
      bodyHTML,
      size: 'right',
      //size: 'left',
      title
    })

    modelWindow.scrollToTop()
    modelWindow.scrollToCenter()
    
  }
}