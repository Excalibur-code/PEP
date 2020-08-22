const electron = require('electron');
const app = electron.app;

function createWindow(){
     let win = new electron.BrowserWindow({
           width: 800,
           height: 600,
           show:false,
           webPreferences: {
               nodeIntegration: true
           }
     })
     win.loadFile('index.html').then(function(){
         win.maximize();
         win.show();
         win.webContents.openDevTools();
     });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
     if(ProcessingInstruction.platform !== 'darwin'){
          app.quit()
     }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})