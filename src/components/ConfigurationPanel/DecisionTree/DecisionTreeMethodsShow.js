export default function (DecisionTree) {
  DecisionTree.methods.showModel = async function () {
    
    let bodyHTML = await this.model.treeToHtml()
    bodyHTML = `<div class="tree">${bodyHTML}</div>`
    //console.error('[TODO]')
    //console.log()
    
    this.utils.PopupUtils.open({
      cssURL: this.modelCSSURL,
      bodyHTML,
      size: 'right',
      title: this.$t('Decision Tree') + ` (` + (new Date()).mmddhhmm() + ')'
    })
  }
}