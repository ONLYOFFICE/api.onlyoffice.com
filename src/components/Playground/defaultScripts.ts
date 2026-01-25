const PLUGIN_HEADER =
    'var Editor = {\n\
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
};\n\n'

export const DEFAULT_SCRIPTS = {
    word: {
        'office-js-api':
            'var oDocument = Api.GetDocument();\n' +
            'var oParagraph = Api.CreateParagraph();\n' +
            'oParagraph.AddText("Hello world!");\n' +
            'oDocument.InsertContent([oParagraph]);\n',

        connector:
            'connector.executeMethod("GetCurrentWord", [], function(word) {\n' +
            '    console.log("GetCurrentWord: " + word);\n' +
            '});\n',

        plugin:
            PLUGIN_HEADER +
            '(async function(){\n' +
            '    let version = await Editor.callMethod("GetVersion");\n' +
            '    console.log(version);\n' +
            '    await Editor.callMethod("PasteHtml", ["<span>Hello, </span><span><b>world</b></span><span>!</span>"]);\n' +
            '})();\n',

        builder:
            "builder.CreateFile(\"docx\");\n" +
            "var oDocument = Api.GetDocument();\n" +
            "var oParagraph = Api.CreateParagraph();\n" +
            "oParagraph.AddText(\"Hello world!\");\n" +
            "oDocument.InsertContent([oParagraph]);\n" +
            "builder.SaveFile(\"docx\", \"Api.docx\");\n" +
            "builder.CloseFile();\n",
    },
    cell: {
        'office-js-api':
            'Api.AddComment("Comment 1", "Bob");\n' +
            'Api.AddComment("Comment 2");\n' +
            'let comments = Api.GetComments();\n' +
            'let worksheet = Api.GetActiveSheet();\n' +
            'worksheet.GetRange("A1").SetValue("Comment Text: ", comments[0].GetText());\n' +
            'worksheet.GetRange("B1").SetValue("Comment Author: ", comments[0].GetAuthorName());\n',

        connector:
            'connector.callCommand(function(word) {\n' +
            '   Api.GetActiveSheet().GetRange("A1:B3").Merge(true);\n' +
            '});\n',

        plugin:
            PLUGIN_HEADER +
            '(async function(){\n' +
            '    let version = await Editor.callMethod("GetVersion");\n' +
            '    console.log(version);\n' +
            '    await Editor.callMethod("PasteHtml", ["<span>Hello, </span><span><b>world</b></span><span>!</span>"]);\n' +
            '})();\n',

        builder:
            "builder.CreateFile(\"xlsx\");\n" +
            "Api.AddComment(\"Comment 1\", \"Bob\");\n" +
            "Api.AddComment(\"Comment 2\");\n" +
            "let comments = Api.GetComments();\n" +
            "let worksheet = Api.GetActiveSheet();\n" +
            "worksheet.GetRange(\"A1\").SetValue(\"Comment Text: \", comments[0].GetText());\n" +
            "worksheet.GetRange(\"B1\").SetValue(\"Comment Author: \", comments[0].GetAuthorName());\n" +
            "builder.SaveFile(\"xlsx\", \"Api.xlsx\");\n" +
            "builder.CloseFile();\n"
    },
    slide: {
        'office-js-api':
            'var oPresentation = Api.GetPresentation();\n' +
            'var oSlide = Api.CreateSlide();\n' +
            'var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);\n' +
            'var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);\n' +
            'var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);\n' +
            'oSlide.SetBackground(oFill);\n' +
            'oPresentation.AddSlide(oSlide);\n',

        connector:
            'connector.callCommand(function() {\n' +
            '    var oPresentation = Api.GetPresentation();\n' +
            '    var oTable = Api.CreateTable(2, 4);\n' +
            '    var oSlide = oPresentation.GetSlideByIndex(0);\n' +
            '    oSlide.RemoveAllObjects();\n' +
            '    oSlide.AddObject(oTable);\n' +
            '});\n',

        plugin:
            PLUGIN_HEADER +
            '(async function(){\n' +
            '    let version = await Editor.callMethod("GetVersion");\n' +
            '    console.log(version);\n' +
            '    await Editor.callMethod("PasteHtml", ["<span>Hello, </span><span><b>world</b></span><span>!</span>"]);\n' +
            '})();\n',

        builder:
            "builder.CreateFile(\"pptx\");\n" +
            "var oPresentation = Api.GetPresentation();\n" +
            "var oSlide = Api.CreateSlide();\n" +
            "var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);\n" +
            "var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);\n" +
            "var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);\n" +
            "oSlide.SetBackground(oFill);\n" +
            "oPresentation.AddSlide(oSlide);\n" +
            "builder.SaveFile(\"pptx\", \"Api.pptx\");\n" +
            "builder.CloseFile();\n",
    },
    form: {
        'office-js-api':
            'var oDocument = Api.GetDocument();\n' +
            'var oParagraph = Api.CreateParagraph();\n' +
            'oParagraph.AddText("Hello world!");\n' +
            'oDocument.InsertContent([oParagraph]);\n',

        connector:
            'connector.executeMethod("GetCurrentWord", [], function(word) {\n' +
            '    console.log("GetCurrentWord: " + word);\n' +
            '});\n',

        plugin:
            PLUGIN_HEADER +
            '(async function(){\n' +
            '    let version = await Editor.callMethod("GetVersion");\n' +
            '    console.log(version);\n' +
            '    await Editor.callMethod("PasteHtml", ["<span>Hello, </span><span><b>world</b></span><span>!</span>"]);\n' +
            '})();\n',

        builder:
            "builder.CreateFile(\"pdf\");\n" +
            "var oDocument = Api.GetDocument();\n" +
            "var oParagraph = Api.CreateParagraph();\n" +
            "oParagraph.AddText(\"Hello world!\");\n" +
            "oDocument.InsertContent([oParagraph]);\n" +
            "builder.SaveFile(\"pdf\", \"Api.pdf\");\n" +
            "builder.CloseFile();\n",
    },
}
