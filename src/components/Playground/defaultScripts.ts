import type { EditorType, ModeType } from "./root/PlaygroundRootContext";

type FileConfig = { ext: string; docType: EditorType; url: string };

type Template = {
    'office-js-api': string;
    connector: string;
    plugin: string;
    builder: string;
};

type Script = Record<ModeType, Template>;

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
};\n\n';

export const FILE_CONFIGS: Record<string, FileConfig> = {
    word: { ext: 'docx', docType: 'word', url: 'https://static.onlyoffice.com/assets/docs/samples/new.docx' },
    pdf: { ext: 'pdf', docType: 'pdf', url: 'https://static.onlyoffice.com/assets/docs/samples/blank.pdf' },
    cell: { ext: 'xlsx', docType: 'cell', url: 'https://static.onlyoffice.com/assets/docs/samples/new.xlsx' },
    slide: { ext: 'pptx', docType: 'slide', url: 'https://static.onlyoffice.com/assets/docs/samples/new.pptx' },
    form: { ext: 'pdf', docType: 'pdf', url: 'https://static.onlyoffice.com/assets/docs/samples/new.pdf' },
};

export const SAMPLE_FILE_CONFIGS: Record<string, FileConfig> = {
    word: { ext: 'docx', docType: 'word', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.docx' },
    pdf: { ext: 'pdf', docType: 'pdf', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.pdf' },
    cell: { ext: 'xlsx', docType: 'cell', url: 'https://static.onlyoffice.com/assets/docs/samples/demo.xlsx' },
    slide: {
        ext: 'pptx',
        docType: 'slide',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo.pptx',
    },
    form: {
        ext: 'pdf',
        docType: 'pdf',
        url: 'https://static.onlyoffice.com/assets/docs/samples/demo-invoice.pdf',
    },
};

const WORD_SCRIPTS: Template = {
    'office-js-api':
        'var oDocument = Api.GetDocument();\n' +
        'var oParagraph = Api.CreateParagraph();\n' +
        'oParagraph.AddText("Hello world!");\n' +
        'oDocument.InsertContent([oParagraph]);\n',

    connector:
        'connector.callCommand(function() {\n' +
        '    var oDocument = Api.GetDocument();\n' +
        '    var oParagraph = Api.CreateParagraph();\n' +
        '    oParagraph.AddText("Hello world!");\n' +
        '    oDocument.InsertContent([oParagraph]);\n' +
        '});\n' +
        '\n' +
        'connector.executeMethod("AddContentControl", [1, {"Tag": "sample_tag", "Lock": 0}]);\n',

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
};

const CELL_SCRIPTS: Template = {
    'office-js-api':
        'Api.AddComment("Comment 1", "Bob");\n' +
        'Api.AddComment("Comment 2");\n' +
        'let comments = Api.GetComments();\n' +
        'let worksheet = Api.GetActiveSheet();\n' +
        'if (comments.length > 0) {\n' +
        '    worksheet.GetRange("A1").SetValue("Comment Text: ", comments[0].GetText());\n' +
        '    worksheet.GetRange("B1").SetValue("Comment Author: ", comments[0].GetAuthorName());\n' +
        '}\n',

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
        'builder.CreateFile("xlsx");\n' +
        'let worksheet = Api.GetActiveSheet();\n' +
        'worksheet.GetRange("B2:G28").Select();\n' +
        'builder.SaveFile("xlsx", "Api.xlsx");\n' +
        'builder.CloseFile();\n',
};

const SLIDE_SCRIPTS: Template = {
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
};

const FORM_SCRIPTS: Template = {
    'office-js-api':
        'var oDocument = Api.GetDocument();\n' +
        'var oParagraph = Api.CreateParagraph();\n' +
        'oParagraph.AddText("Hello world!");\n' +
        'oDocument.InsertContent([oParagraph]);\n',

    connector:
        'connector.callCommand(function() {\n' +
        '    var oDocument = Api.GetDocument();\n' +
        '    var oParagraph = Api.CreateParagraph();\n' +
        '    var oTextForm = Api.CreateTextForm({"key": "Name", "tip": "Enter your name", "required": true, "placeholder": "First name"});\n' +
        '    oParagraph.AddElement(oTextForm);\n' +
        '    oDocument.InsertContent([oParagraph]);\n' +
        '});\n' +
        '\n' +
        'connector.executeMethod("InputText", ["ONLYOFFICE Playground", ""]);\n',

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
        "builder.SaveFile(\"pdf\", \"Api.pdf\");\n" +
        "builder.CloseFile();\n",
};

const PDF_SCRIPTS: Template = {
    'office-js-api':
        'var oDocument = Api.GetDocument();\n' +
        'var oPage = oDocument.GetPage(0);\n' +
        'var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));\n' +
        'var oStroke = Api.CreateStroke(0, Api.CreateNoFill());\n' +
        'var oShape = Api.CreateShape("rect", 100 * 36000, 30 * 36000, oFill, oStroke);\n' +
        'oShape.SetPosition(608400, 1267200);\n' +
        'var oContent = oShape.GetContent();\n' +
        'var oParagraph = oContent.GetElement(0);\n' +
        'var oRun = Api.CreateRun();\n' +
        'oRun.AddText("Hello world!");\n' +
        'oParagraph.AddElement(oRun);\n' +
        'oPage.AddObject(oShape);\n',

    connector:
        'connector.callCommand(function() {\n' +
        '    var doc = Api.GetDocument();\n' +
        '    var page = doc.GetPage(0);\n' +
        '    var fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));\n' +
        '    var stroke = Api.CreateStroke(0, Api.CreateNoFill());\n' +
        '    var shape = Api.CreateShape("rect", 100 * 36000, 30 * 36000, fill, stroke);\n' +
        '    shape.SetPosition(608400, 1267200);\n' +
        '    page.AddObject(shape);\n' +
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
        'const doc1 = Api.GetDocument();\n' +
        'const page = doc1.GetPage(0);\n' +
        'const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));\n' +
        'const stroke = Api.CreateStroke(0, Api.CreateNoFill());\n' +
        'const shape = Api.CreateShape("wave", 150 * 36000, 65 * 36000, fill, stroke);\n' +
        'shape.SetPosition(608400, 1267200);\n' +
        'const docContent = shape.GetContent();\n' +
        'const paragraph = docContent.GetElement(0);\n' +
        'paragraph.SetJc("center");\n' +
        'let run = Api.CreateRun();\n' +
        'run.SetFontSize(60);\n' +
        'run.SetFontFamily("Comic Sans MS");\n' +
        'run.AddText("Hello World!");\n' +
        'paragraph.AddElement(run);\n' +
        'page.AddObject(shape);\n' +
        "builder.SaveFile(\"pdf\", \"Api.pdf\");\n" +
        "builder.CloseFile();\n",
};

const DEFAULT_SCRIPTS: Record<EditorType, Script> = {
    word: { desktop: WORD_SCRIPTS, embedded: WORD_SCRIPTS, mobile: WORD_SCRIPTS },
    cell: { desktop: CELL_SCRIPTS, embedded: CELL_SCRIPTS, mobile: CELL_SCRIPTS },
    slide: { desktop: SLIDE_SCRIPTS, embedded: SLIDE_SCRIPTS, mobile: SLIDE_SCRIPTS },
    form: { desktop: FORM_SCRIPTS, embedded: FORM_SCRIPTS, mobile: FORM_SCRIPTS },
    pdf: { desktop: PDF_SCRIPTS, embedded: PDF_SCRIPTS, mobile: PDF_SCRIPTS },
};

export function getDefaultScript(
    editorType: EditorType,
    modeType: ModeType,
    scriptType: keyof Template
): string {
    return DEFAULT_SCRIPTS[editorType][modeType][scriptType];
}
