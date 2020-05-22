const path = require("path");
const home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
const fs = require("fs");


const Blowser = require('./blowser.js');

const Url = 'https://github.com/KatsutoshiOtogawa/How_To_add_windows_update_to_WindowsImage'

const pdfPath = path.join(home, "Pictures","create_github_pdf");

if(!fs.existsSync(pdfPath)){
    fs.mkdirSync(pdfPath,{recursive: true});
}

const blowser  = new Blowser(Url,pdfPath);

blowser.invoke();
