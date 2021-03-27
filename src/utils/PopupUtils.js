export default {
  open: function (options = {}) {
    let {
      windowName = 'popup' + (new Date()).getTime(),
      cssURL,
      bodyHTML,
      title = window.document.title,
      size = 'fullscreen' // 'fullscreen', 'left', 'right'
    } = options
    
    let top = 0
    let left = 0
    let width = window.screen.availWidth
    let height = window.screen.availHeight
    
    if (size === 'left') {
      width = parseInt(width / 2, 10)
    }
    else if (size === 'right') {
      width = parseInt(width / 2, 10)
      left = width
    }
    
    let parameters = [
      'toolbar=no',
      'location=no',
      'status=no',
      'menubar=no',
      'scrollbars=yes',
      'resizable=yes',
      'width=' + width,
      'height=' + height,
      'top=' + top,
      'left=' + left
    ]
    //console.log(windowName)
    let win = window.open('', windowName, parameters.join(','))
    let doc = win.document
    
    if (cssURL) {
      
      var head  = doc.getElementsByTagName('head')[0];
      var link  = doc.createElement('link');
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = cssURL
      //link.media = 'all';
      head.appendChild(link);
    }
    
    if (bodyHTML) {
      doc.body.innerHTML = bodyHTML
    }
    
    if (title) {
      doc.title = title
    }
    
    return win
  }
}