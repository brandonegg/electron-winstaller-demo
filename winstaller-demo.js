const electronInstaller = require('electron-winstaller');

/**
 * 
 * @param {string} outPath 
 */
async function build(outPath) {
    try {
        await electronInstaller.createWindowsInstaller({
          appDirectory: outPath,
          outputDirectory: './out/build/installer64',
          authors: 'My App Inc.',
          exe: 'my-new-app.exe'
        });
        console.log('It worked!');
      } catch (e) {
        console.log(`No dice: ${e.message}`);
      }
}

build("./out/my-new-app-win32-x64");
