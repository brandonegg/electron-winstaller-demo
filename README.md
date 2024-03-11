### Hypothesis

```json
{ "name": "@demo/electron-app" }
```
Using a forward slash in the package name appears to be clashing with the Windows file system. Winstaller produces a temporary directory using the [temp](https://www.npmjs.com/package/temp) package, during this process it appears to be referring to the package name for the directory. The issue relates to behavior either within node itself, or the method for retrieving `metadata.name` (I need to investigate this area furthur for a better conclusion). The following error occurs:

```
No dice: ENOENT: no such file or directory, open 'C:\Users\brand\AppData\Local\Temp\si-2024211-24288-gbeeps.l924q\@demo\electron-app.nuspec'
```

### Reproducing

```sh
npm install
npm run package
node winstaller-demo.js
```

### Environment

- Windows 11: 23H2
- Node: v18.19.1
- Npm: 10.2.4
