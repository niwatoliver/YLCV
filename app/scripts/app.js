const webview = document.querySelector('webview')
webview.addEventListener('dom-ready', () => {
  webview.openDevTools()
  const css = '#overflow.yt-live-chat-header-renderer{ margin-right: 32px; }';
  webview.insertCSS(css)
})