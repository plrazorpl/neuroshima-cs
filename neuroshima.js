var lockUpdate = false;

on("chat:message", function(msg) {
    try {
        // log("msg= " + msg);
        // log("chat:message= " + JSON.stringify(msg));

        if (msg.content.startsWith("!nscs|-|switchRadio")) {
            switchRadio(msg);
        }
    } catch (e) {
        lockUpdate = false;
        log(JSON.stringify(e));
        // throw e;
    }
});

function getParam(params, key) {
    for (const element of params) {
        if (element.includes(key)) {
            return element.replace(key, "");
        }
    }
    return null;
}

function switchRadio(msg) {
    let paramsText = msg.content.replace("!nscs|-|switchRadio", "");
    let params = paramsText.split("|-|")
    let characterId = getParam(params, "csId:");
    let sheetPage = getParam(params, "sheet_page:");

    setAttrNSCS(characterId, "sheet_page", +sheetPage);
}

function getAttrNSCS(character, attrName, defaultValue) {
    let objs = findObjs({ type: 'attribute', characterid: character, name: attrName });

    let toNotRemove = -1;
    for (let i = 0; i < objs.length; i++) {
        if (objs[i] != null) {
            toNotRemove = i;
            // break;
        }
    }
    let attr = null;
    if (toNotRemove >= 0) {
        attr = objs[toNotRemove];
    }

    for (let i = 0; i < objs.length; i++) {
        if (i != toNotRemove) {
            objs[i].remove();
        }
    }

    if (attr == null) {
        attr = createObj('attribute', {
            characterid: character,
            name: attrName,
            current: defaultValue
        });
    }
    return attr;
}

function setAttrNSCS(character, attrName, value) {
    let attr = getAttrNSCS(character, attrName, value);
    attr.set({current: value});
}