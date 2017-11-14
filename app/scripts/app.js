const { remote, webFrame } = require('electron');
const currentWindow = remote.getCurrentWindow();

const webview = document.querySelector('webview')
webview.addEventListener('dom-ready', () => {
  //webview.openDevTools()
  const css = '#overflow.yt-live-chat-header-renderer{ margin-right: 32px; }';
  webview.insertCSS(css);
});


document.getElementById('css-button').addEventListener('click', ()=>{
  webview.insertCSS(document.getElementById('css-textarea').value);
}, false);

document.getElementById('background-button').addEventListener('click', ()=>{
  document.body.style.backgroundColor = document.getElementById('background-input').value;
}, false);

document.getElementById('connect-button').addEventListener('click', ()=>{
  webview.loadURL(document.getElementById('connect-input').value);
}, false);


document.getElementById('setting').addEventListener('click', setting, false);
function setting() {
  const settingMenuStyle = document.getElementById('setting-menu').style;
  const wbWrapStyle = document.getElementById('wv-wrap').style;
  if(settingMenuStyle.display === 'block'){
    hiddenSetting();
    settingMenuStyle.display = 'none';
    wbWrapStyle.width = '100%';
  }
  else {
    openSetting();
    settingMenuStyle.display = 'block';
    wbWrapStyle.width = 'calc( 100% - 200px )';
  }
}

/* Setting Hidden  ------------------------------------------------ */
function hiddenSetting() {
  currentWindow.setSize(
    currentWindow.getSize()[0] - 200,
    currentWindow.getSize()[1]
  );
}

/* Setting Open  -------------------------------------------------- */
function openSetting() {
  currentWindow.setSize(
    currentWindow.getSize()[0] + 200,
    currentWindow.getSize()[1]
  );
}