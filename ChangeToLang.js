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
    console.log(ObjLang);
    return ObjLang;
}

LangToJson("./data/Json.json");