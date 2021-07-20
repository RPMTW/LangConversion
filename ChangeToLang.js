const fs = require("fs");
function JsonToLang(path) {
    let LangJson = parse(fs.readFileSync(path).toString());
    let ObjJsonKey = Object.keys(LangJson);
    let ObjLang = "";
    for (let i = 0; i < ObjJsonKey.length; i++) {
        if (ObjJsonKey[i].startsWith("_comment_")) {
            ObjLang += `#${LangJson[ObjJsonKey[i]]}\n`;
        } else {
            ObjLang += `${ObjJsonKey[i]}=${LangJson[ObjJsonKey[i]]}\n`;
        }
    }
    fs.writeFileSync("./data/Lang.lang", JSON.stringify(ObjLang, null, 4));
    console.log("已經將轉化後內容儲存");
    return ObjLang;
}

LangToJson("./data/Json.json");