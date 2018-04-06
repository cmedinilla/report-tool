const { BrowserWindow } = require('electron');

exports.openAboutWindow = () => {
  let newWindow = new BrowserWindow({
    height: 300,
    resizable: false,
    width: 300,
    title: '',
    minimizable: false,
    fullscreenable: false,
  });

  newWindow.setMenu(null);

  newWindow.loadURL(`file://${__dirname}/../about/about.html`);

  newWindow.on('closed', () => {
    newWindow = null;
  });
};
