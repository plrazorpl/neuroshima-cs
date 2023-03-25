var lockUpdate = false;

on("chat:message", function (msg) {
    try {
        // log("msg= " + msg);
        // log("chat:message= " + JSON.stringify(msg));

        if (msg.content.startsWith("!nscs|-|switchRadio")) {
            switchRadio(msg);
        } else if (msg.content.startsWith("!nscs|-|randomAbilities")) {
            randomAbiliteis(msg);
        } else if (msg.content.startsWith("!nscs|-|parametersRoll|-|")) {
            parametersRoll(msg.content);
        } else if (msg.content.startsWith("!nscs|-|parametersRollAll|-|")) {
            parametersRollAll(msg.content);
        }
    } catch (e) {
        lockUpdate = false;
        log(JSON.stringify(e));
        // throw e;
    }
});

on("change:attribute", function (msg) {
    try {
        if (lockUpdate) {
            return;
        }
        let characterId = msg.get('_characterid');
        recalculateData(characterId);

    } catch (e) {
        log(e);
    }
});

function rollAnimation(characterId, diceAttr, currentTimeout, maxTimeout, multiplier, calculateFunction) {
    if (currentTimeout > maxTimeout) {
        return;
    }
    setTimeout(() => {
        let val = randomInteger(20);
        if (val < 6) {
            val = 6;
        }
        setAttrNSCS(characterId, diceAttr, val);
        rollAnimation(characterId, diceAttr, currentTimeout * multiplier, maxTimeout, multiplier, calculateFunction);
        calculateFunction();
    }, currentTimeout);
}

function parametersRoll(msg) {
    let paramsText = msg.replace("!nscs|-|parametersRoll", "");
    let params = paramsText.split("|-|")
    let characterId = getParam(params, "csId:");
    const resultAttr = getParam(params, "result:");
    const dice1Attr = getParam(params, "dice1:");
    const dice2Attr = getParam(params, "dice2:");
    const dice3Attr = getParam(params, "dice3:");
    setAttrNSCS(characterId, resultAttr, "");
    setAttrNSCS(characterId, dice1Attr, "");
    setAttrNSCS(characterId, dice2Attr, "");
    setAttrNSCS(characterId, dice3Attr, "");

    const calculateFunction = () => {
        const el1 = +(getAttrNSCS(characterId, dice1Attr, "6").get("current"));
        const el2 = +(getAttrNSCS(characterId, dice2Attr, "6").get("current"));
        const el3 = +(getAttrNSCS(characterId, dice3Attr, "6").get("current"));
        const calculation = (el1 + el2 + el3)/3;
        const result = Math.ceil(calculation);
        setAttrNSCS(characterId, resultAttr, result);
    }

    rollAnimation(characterId, dice1Attr, 10, 1000, 1.4, calculateFunction);
    setTimeout(() => {
        rollAnimation(characterId, dice2Attr, 10, 1000, 1.4, calculateFunction);
    }, 300);
    setTimeout(() => {
        rollAnimation(characterId, dice3Attr, 10, 1000, 1.4, calculateFunction);
    }, 600);
}

function parametersRollAll(msg) {
    let paramsText = msg.replace("!nscs|-|parametersRollAll|-|", "");
    let params = paramsText.split("|-|")
    let characterId = getParam(params, "csId:");

    for (let toClear of ROLL_ALL_DICES_PARAMETERS.clearData) {
        setAttrNSCS(characterId, toClear, "");
    }

    for (let i = 0; i < ROLL_ALL_DICES_PARAMETERS.rolls.length; i++) {
        let params = ROLL_ALL_DICES_PARAMETERS.rolls[i];
        params += "|-|csId:" + characterId;
        setTimeout(() => {
            parametersRoll(params);
        }, ROLL_ALL_DICES_PARAMETERS.latency * i);
    }
}

function getParam(params, key) {
    for (const element of params) {
        if (element.includes(key)) {
            return element.replace(key, "");
        }
    }
    return null;
}

function recalculateAbility(characterId, abilityName) {
    const origin = getAttrNSCS(characterId, "origin_value", "-1");
    const selectedOption = getAttrNSCS(characterId, "ch_" + abilityName + "_selected", "-1");
    const selectedValue = getAttrNSCS(characterId, "ch_" + selectedOption.get("current"), "0");
    let modAbility = "";
    let mod = 0;
    if (+(origin.get("current")) >= 0) {
        modAbility = ORIGIN_ABILITIES[origin.get("current")]
    }

    if (modAbility === "s") {
        modAbility = getAttrNSCS(characterId, "origin_selected_ability", "");
    }

    if (modAbility === abilityName) {
        mod = 1;
    }

    let value = (+(selectedValue.get("current"))) + mod;
    setAttrNSCS(characterId, "ch_" + abilityName, value);
}

function recalculateDescriptionOriginSkill20(characterId) {
    const selectedOption = getAttrNSCS(characterId, "origin_skill20_selected", "0").get("current");
    let description = ORIGIN_SKILLS[selectedOption].description;
    setAttrNSCS(characterId, "origin_skill_description20", description);
}

function recalculateData(characterId) {
    recalculateAbility(characterId, "bd");
    recalculateAbility(characterId, "ag");
    recalculateAbility(characterId, "pr");
    recalculateAbility(characterId, "cha");
    recalculateAbility(characterId, "int");
    recalculateDescriptionOriginSkill20(characterId);
}

function updateParams(params, characterId) {
    params.forEach(element => {
        let params = element.split(":");
        if (params[0] === "csId") {
            return;
        }
        setAttrNSCS(characterId, params[0], params[1]);
    });

    recalculateData(characterId);
}

function randomNumbers(diceNumber, minValue) {
    let result = [];
    for (let i = 0; i < diceNumber; i++) {
        let random = randomInteger(20);
        if (random < minValue) {
            random = minValue;
        }
        result[i] = random;
    }
    return result;
}

function averageOf(tableNumber) {
    let result = 0;
    tableNumber.forEach(el => result += (+el));
    result = Math.ceil(result / tableNumber.length);
    return result;
}

function isTheLowest(currentValue, ...values) {
    let result = +values[0];
    for (let i = 1; i < values.length; i++) {
        if (result > +values[i]) {
            result = +values[i];
        }
    }
    return result === currentValue;
}

function setRandomEnvironmentVariable(symbol, value, isTheLowest, characterId) {
    let comment = isTheLowest ? "Najmiejsza!" : "";
    setAttrNSCS(characterId, "ch_" + symbol, value);
    setAttrNSCS(characterId, "ch_" + symbol + "_comment", comment);
}

function randomAbiliteis(msg) {
    let paramsText = msg.content.replace("!nscs|-|switchRadio", "");
    let params = paramsText.split("|-|")
    let characterId = getParam(params, "csId:");
    const abiA = randomNumbers(3, 6);
    const abiB = randomNumbers(3, 6);
    const abiC = randomNumbers(3, 6);
    const abiD = randomNumbers(3, 6);
    const abiE = randomNumbers(3, 6);
    const abiF = randomNumbers(3, 6);

    const abiAAve = averageOf(abiA);
    const abiBAve = averageOf(abiB);
    const abiCAve = averageOf(abiC);
    const abiDAve = averageOf(abiD);
    const abiEAve = averageOf(abiE);
    const abiFAve = averageOf(abiF);

    let abiATheLowest = isTheLowest(abiAAve, abiAAve, abiBAve, abiCAve, abiDAve, abiEAve, abiFAve);
    let abiBTheLowest = isTheLowest(abiBAve, abiAAve, abiBAve, abiCAve, abiDAve, abiEAve, abiFAve);
    let abiCTheLowest = isTheLowest(abiCAve, abiAAve, abiBAve, abiCAve, abiDAve, abiEAve, abiFAve);
    let abiDTheLowest = isTheLowest(abiDAve, abiAAve, abiBAve, abiCAve, abiDAve, abiEAve, abiFAve);
    let abiETheLowest = isTheLowest(abiEAve, abiAAve, abiBAve, abiCAve, abiDAve, abiEAve, abiFAve);
    let abiFTheLowest = isTheLowest(abiFAve, abiAAve, abiBAve, abiCAve, abiDAve, abiEAve, abiFAve);

    let foundTheLowest = false;
    if (!foundTheLowest && abiATheLowest) {
        abiATheLowest = true;
        foundTheLowest = true;
    } else {
        abiATheLowest = false;
    }

    if (!foundTheLowest && abiBTheLowest) {
        abiBTheLowest = true;
        foundTheLowest = true;
    } else {
        abiBTheLowest = false;
    }

    if (!foundTheLowest && abiCTheLowest) {
        abiCTheLowest = true;
        foundTheLowest = true;
    } else {
        abiCTheLowest = false;
    }

    if (!foundTheLowest && abiDTheLowest) {
        abiDTheLowest = true;
        foundTheLowest = true;
    } else {
        abiDTheLowest = false;
    }

    if (!foundTheLowest && abiETheLowest) {
        abiETheLowest = true;
        foundTheLowest = true;
    } else {
        abiETheLowest = false;
    }

    if (!foundTheLowest && abiFTheLowest) {
        abiFTheLowest = true;
        foundTheLowest = true;
    } else {
        abiFTheLowest = false;
    }

    setRandomEnvironmentVariable("a", abiAAve, abiATheLowest, characterId);
    setRandomEnvironmentVariable("b", abiBAve, abiBTheLowest, characterId);
    setRandomEnvironmentVariable("c", abiCAve, abiCTheLowest, characterId);
    setRandomEnvironmentVariable("d", abiDAve, abiDTheLowest, characterId);
    setRandomEnvironmentVariable("e", abiEAve, abiETheLowest, characterId);
    setRandomEnvironmentVariable("f", abiFAve, abiFTheLowest, characterId);

    recalculateData(characterId);
}

function switchRadio(msg) {
    let paramsText = msg.content.replace("!nscs|-|switchRadio", "");
    let params = paramsText.split("|-|")
    let characterId = getParam(params, "csId:");

    updateParams(params, characterId);
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
    if (value == null) {
        return;
    }
    let attr = getAttrNSCS(character, attrName, value);
    attr.set({current: value});
}