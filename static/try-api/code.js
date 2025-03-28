var Environment = {
    editor: "word",
    type: "desktop",
    theme: "light",
    lang: "en",
    testType: "office-js-api"    
};

var plugins_Header = "var Editor = {\n\
    callCommand : async function(func) {\n\
        return new Promise(resolve => (function(){\n\
            Asc.plugin.callCommand(func, false, true, function(returnValue){\n\
                resolve(returnValue);\n\
            });\n\
        })());\n\
    },\n\
    callMethod : async function(name, args)\n\
    {\n\
        return new Promise(resolve => (function(){\n\
            Asc.plugin.executeMethod(name, args || [], function(returnValue){\n\
                resolve(returnValue);\n\
            });\n\
        })());\n\
    }\n\
};\n\n";

var Placeholders = {
    "word" : {
        "office-js-api": "var oDocument = Api.GetDocument();\n" + 
                         "var oParagraph = Api.CreateParagraph();\n" + 
                         "oParagraph.AddText(\"Hello world!\");\n" + 
                         "oDocument.InsertContent([oParagraph]);\n",
        
        "connector":     "connector.executeMethod(\"GetCurrentWord\", [], function(word) {\n" +
                         "    console.log(\"GetCurrentWord: \" + word);\n" +
                         "});\n",

        "plugin": plugins_Header + 
                  "(async function(){\n" + 
                  "    let version = await Editor.callMethod(\"GetVersion\");\n" +
                  "    console.log(version);\n" +
                  "    await Editor.callMethod(\"PasteHtml\", [\"<span>Hello, </span><span><b>world</b></span><span>!</span>\"]);\n" + 
                  "})();\n"
    },
    "cell" : {
        "office-js-api": "Api.AddComment(\"Comment 1\", \"Bob\");\n" +
                         "Api.AddComment(\"Comment 2\");\n" +
                         "let comments = Api.GetComments();\n" +
                         "let worksheet = Api.GetActiveSheet();\n" +
                         "worksheet.GetRange(\"A1\").SetValue(\"Comment Text: \", comments[0].GetText());\n" +
                         "worksheet.GetRange(\"B1\").SetValue(\"Comment Author: \", comments[0].GetAuthorName());\n",
        
        "connector":     "connector.callCommand(function(word) {\n" +
                         "   Api.GetActiveSheet().GetRange(\"A1:B3\").Merge(true);\n" +
                         "});\n",

        "plugin": plugins_Header + 
                  "(async function(){\n" + 
                  "    let version = await Editor.callMethod(\"GetVersion\");\n" +
                  "    console.log(version);\n" +
                  "    await Editor.callMethod(\"PasteHtml\", [\"<span>Hello, </span><span><b>world</b></span><span>!</span>\"]);\n" + 
                  "})();\n"
    },
    "slide" : {
        "office-js-api": "var oPresentation = Api.GetPresentation();\n" +
                         "var oSlide = Api.CreateSlide();\n" +
                         "var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);\n" +
                         "var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);\n" +
                         "var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);\n" +
                         "oSlide.SetBackground(oFill);\n" +
                         "oPresentation.AddSlide(oSlide);\n",
        
        "connector":     "connector.callCommand(function() {\n" +
                         "    var oPresentation = Api.GetPresentation();\n" +
                         "    var oTable = Api.CreateTable(2, 4);\n" +
                         "    var oSlide = oPresentation.GetSlideByIndex(0);\n" +
                         "    oSlide.RemoveAllObjects();\n" +
                         "    oSlide.AddObject(oTable);\n" +
                         "});\n",

        "plugin": plugins_Header + 
                  "(async function(){\n" + 
                  "    let version = await Editor.callMethod(\"GetVersion\");\n" +
                  "    console.log(version);\n" +
                  "    await Editor.callMethod(\"PasteHtml\", [\"<span>Hello, </span><span><b>world</b></span><span>!</span>\"]);\n" + 
                  "})();\n"
    }
};

function Environment_Load()
{
    let obj = {};
    try
    {
        obj = JSON.parse(window.localStorage.getItem("oo-test-editors"));
        
        if (obj)
        {
            for (item in obj)
            {
                if (Environment[item])
                    Environment[item] = obj[item];
            }
        }
    }
    catch (e)
    {
    }
}

function Environment_Save()
{
    let obj = {};
    try
    {
        window.localStorage.setItem("oo-test-editors", JSON.stringify(Environment));
    }
    catch (e)
    {        
    }
}

Environment_Load();

function getFullUrl(localUrl) {
    let url = location.href;
    url = url.substring(0, url.lastIndexOf("/"));
    return url + localUrl;
}

async function createJWT(json, secret) {
    if (!secret) return null;
    let header = {
        typ: "JWT",
        alg: "HS256"
    }

    let base64EncodeURL = function(str) {
        return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
    }

    let encodedHeader = base64EncodeURL(JSON.stringify(header));
    let encodedPayload = base64EncodeURL(JSON.stringify(json));
    let encoder = new TextEncoder();
    let algorithm = { name: "HMAC", hash: "SHA-256" };
    let key = await crypto.subtle.importKey("raw", encoder.encode(secret), algorithm, false, ["sign", "verify"]);
    let buf = encoder.encode(encodedHeader + "." + encodedPayload);
    let sign = await crypto.subtle.sign(algorithm.name, key, buf);
    let hash = base64EncodeURL(String.fromCharCode(...new Uint8Array(sign)));
    return encodedHeader + "." + encodedPayload + "." + hash;
}

async function initCodeEditorType()
{
    if (window.connector)
        window.connector.disconnect();

    var divEditor = document.getElementById("editor");
    divEditor.innerHTML = "<div id=\"placeholder\" style=\"position:absolute;left:0px;top:0px;width:100%;height:100%;\"></div>";

    var ext = "docx";
    if (Environment.editor == "slide")
        ext = "pptx";
    if (Environment.editor == "cell")
        ext = "xlsx";

    // JWT
    let secret = "doc-linux";
    let fileUrl = "https://d2nlctn12v279m.cloudfront.net/assets/docs/samples/demo.";
    if (!secret)
        fileUrl = getFullUrl("/files/new.");
    fileUrl += ext;

    let config = {
        "document": {
            "fileType": ext,
            "key": "0" + Math.random(),
            "title": "Example Document Title." + ext,
            "url": fileUrl
        },
        "documentType": Environment.editor,
        "type": Environment.type,
        "editorConfig": {
            "user": {
                "id": "userID",
                "name": "Developer"
            },
            "customization": {
                "uiTheme": (theme.type === "dark") ? "default-dark" : "default-light"
            },
            "lang": Environment.lang
        },
        "height": "100%",
        "width": "100%"
    };

    if (secret) {
        config.token = await createJWT(config, "doc-linux");        
    }

    config.events = {
        onDocumentReady: () => { 
            window.connector = window.docEditor.createConnector();

            let url = getFullUrl("/plugin/config.json");
            window.connector.callCommand(new Function("Api.installDeveloperPlugin(\"" + url + "\");"));
        }
    };

    window.docEditor = new DocsAPI.DocEditor("placeholder", config);

    codeEditor.addLibrary({
        url: "./libs/" + Environment.editor + "/api.js", 
        name : "onlyoffice"
    });
}

document.getElementById("editor_types").value = Environment.editor;
document.getElementById("editor_types").addEventListener('change', function() {
    if (Environment.editor == this.value)
        return;

    Environment.editor = this.value;
    Environment_Save();
    initCodeEditorType();
});
document.getElementById("editor_themes").value = Environment.theme;
document.getElementById("editor_themes").addEventListener('change', function() {
    if (Environment.theme == this.value)
        return;

    Environment.theme = this.value;
    Environment_Save();

    theme = Environment.theme === "light" ? themeLight : themeDark;
    onTheme();
    initCodeEditorType();
});

document.getElementById("editor_func").value = Environment.testType;
document.getElementById("editor_func").addEventListener('change', function() {
    Environment.testType = this.value;
    Environment_Save();

    codeEditor.setValue(Placeholders[Environment.editor][Environment.testType]);
});

document.getElementById("editor_langs").value = Environment.lang;
document.getElementById("editor_langs").addEventListener('change', function() {
    if (Environment.lang == this.value)
        return;
    
    Environment.lang = this.value;
    Environment_Save();
    initCodeEditorType();
});

document.getElementById("editor_modes").value = Environment.type;
document.getElementById("editor_modes").addEventListener('change', function() {
    if (Environment.type == this.value)
        return;
    
    Environment.type = this.value;
    Environment_Save();
    initCodeEditorType();
});

var buttonRun = document.getElementById("runButton");
buttonRun.onclick = function()
{
    if (!window.connector)
    {
        console.log("PLEASE WAIT EDITOR!!!");
        return;
    }

    switch (Environment.testType)
    {
        case "office-js-api":
        {
            window.connector.callCommand(new Function(codeEditor.getValue()));
            break;
        }
        case "connector":
        {
            eval(codeEditor.getValue());
            break;
        }
        case "plugin":
        {
            connector.executeMethod("SetPluginsOptions", [{
                "asc.{D764D084-C77A-4A3E-A157-A9A1E442BCFC}" : {
                    "codeExecute" : codeEditor.getValue()
                }
            }], function() {});
            break;
        }
        default:
            break;
    }
}

/**
 * THEMES
 */

var themeLight = {
    type: "light",
    background: "#f1f1f1"
};

var themeDark = {
    type: "dark",
    background: "#404040"
};

var theme = Environment.theme === "light" ? themeLight : themeDark;

function onTheme() {
    document.body.style.backgroundColor = theme.background;
    codeEditor.setTheme(theme.type === "light" ? "vs-light" : "vs-dark");   
}

/**
 * CODE EDITOR
 */
var codeEditor = new window.MonacoEditor();
codeEditor.create("codeWrapper", theme.type === "light" ? "vs-light" : "vs-dark", "", {
    minimap: {
        enabled: false
    }
});

/**
 * OPEN FILE
 */
initCodeEditorType();
onTheme();