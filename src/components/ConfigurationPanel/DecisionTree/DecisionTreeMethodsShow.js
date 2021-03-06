export default function (DecisionTree) {
  DecisionTree.methods.showModel = async function () {
    
    let bodyHTML = await this.model.treeToHtml()
    bodyHTML = `<div class="tree">${bodyHTML}</div>`
    //console.error('[TODO]')
    //console.log()
    let title = this.$t('Decision Tree') + ` (` + (new Date()).mmddhhmm() + ')'
    
    if (this.$parent.isModelWindowOpened === false) {
      this.$parent.modelWindow = this.utils.PopupUtils.open({
        windowName: 'DecisionTreeModelShow',
        cssURL: this.modelCSSURL,
        bodyHTML,
        size: 'right',
        title
      })
    }
    else {
      this.$parent.modelWindow.setHTML(bodyHTML)
      this.$parent.modelWindow.setTitle(title)
    }
    
    this.$parent.modelWindow.scrollToTop()
    this.$parent.modelWindow.scrollToCenter()
  }
}