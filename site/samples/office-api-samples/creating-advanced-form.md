# Creating advanced form

Create an advanced form with a table structure:

- create a new document, create tables for the text and form inputs ([Api/CreateParagraph](../../docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [Api/CreateTable](../../docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [ApiDocument/Push](../../docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [ApiDocumentContent/GetElement](../../docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md), [ApiParagraph/AddText](../../docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [ApiTable/GetRow](../../docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRow.md), [ApiTableCell/GetContent](../../docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md), [ApiTable/GetCell](../../docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md));
- style tables ([ApiTable/SetTableBorderTop](../../docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md), [ApiTable/SetTableBorderBottom](../../docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderBottom.md), [ApiTable/SetTableBorderLeft](../../docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderLeft.md), [ApiTable/SetTableBorderRight](../../docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderRight.md), [ApiTable/SetWidth](../../docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetWidth.md), [ApiTableRow/SetBackgroundColor](../../docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md));
- create the text and image forms and add them to the tables ([Api/CreatePictureForm](../../docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md), [Api/CreateTextForm](../../docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)).

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/builder-framework/builder-framework-samples/builder-framework-samples.md) page.

```ts document-builder={"documentType": "pdf", "editorConfig": {"customization": {"zoom": 60}}}
const oDocument = Api.GetDocument()

function addTextFormToParagraph(oParagraph, fontSize, key, placeholder,
  maxCharacters, jc, comb, border) {
  const oTextForm = Api.CreateTextForm({
    key,
    required: false,
    comb,
    placeholder,
    maxCharacters,
    multiLine: false,
    autoFit: true,
  })
  if (border) {
    oTextForm.SetBorderColor(200, 200, 200)
  }
  oParagraph.AddElement(oTextForm)
  oParagraph.SetFontSize(fontSize)
  oParagraph.SetJc(jc)
}

function setBordres(oTable, color) {
  oTable.SetTableBorderTop("single", 4, 0, color, color, color)
  oTable.SetTableBorderBottom("single", 4, 0, color, color, color)
  oTable.SetTableBorderLeft("single", 4, 0, color, color, color)
  oTable.SetTableBorderRight("single", 4, 0, color, color, color)
  oTable.SetTableBorderInsideV("single", 4, 0, color, color, color)
  oTable.SetTableBorderInsideH("single", 4, 0, color, color, color)
}

function addTextToParagraph(oParagraph, text, fontSize, isBold, jc) {
  oParagraph.AddText(text)
  oParagraph.SetFontSize(fontSize)
  oParagraph.SetBold(isBold)
  oParagraph.SetJc(jc)
}

function getTableCellParagraph(oTable, row, col, width) {
  const oCell = oTable.GetCell(row, col)
  oCell.SetWidth("twips", width)
  return oCell.GetContent().GetElement(0)
}

function createFullWidthTable(rows, cols, borderColor, marginTop) {
  const oTable = Api.CreateTable(cols, rows)
  oTable.SetWidth("percent", 100)
  setBordres(oTable, borderColor)
  oTable.SetTableCellMarginTop(marginTop)
  return oTable
}

let oTable = createFullWidthTable(1, 3, 255, 100)
let oParagraph = getTableCellParagraph(oTable, 0, 0, 4320)
addTextToParagraph(oParagraph, "PURCHASE ORDER", 36, true)
oParagraph = getTableCellParagraph(oTable, 0, 1, 720)
addTextToParagraph(oParagraph, "Serial #", 25, false, "right")
oParagraph = getTableCellParagraph(oTable, 0, 2, 1440)
addTextFormToParagraph(oParagraph, 25, "Serial", " ", 5, "left", true)
oDocument.Push(oTable)

oParagraph = Api.CreateParagraph()
const oPictureForm = Api.CreatePictureForm({
  key: "Photo",
  tip: "Upload Company Logo",
  required: false,
  placeholder: "Photo",
  scaleFlag: "tooBig",
  lockAspectRatio: false,
  respectBorders: false,
})
oParagraph.AddElement(oPictureForm)
oDocument.Push(oParagraph)

oParagraph = Api.CreateParagraph()
addTextFormToParagraph(oParagraph, 35, "Company Name", "Company Name", 50, "left")
oDocument.Push(oParagraph)

oParagraph = Api.CreateParagraph()
addTextToParagraph(oParagraph, "Date: ", 25)
addTextFormToParagraph(oParagraph, 35, "Date", "DD.MM.YYYY", 10, "left", true, true)
oDocument.Push(oParagraph)

oParagraph = Api.CreateParagraph()
addTextToParagraph(oParagraph, "To:", 35, true)
oDocument.Push(oParagraph)

oTable = createFullWidthTable(1, 1, 200, 100)
oParagraph = getTableCellParagraph(oTable, 0, 0)
addTextFormToParagraph(oParagraph, 30, "Recipient", "Recipient", 32, "left", true)
oDocument.Push(oTable)

oTable = createFullWidthTable(10, 2, 200, 100)
oTable.GetRow(0).SetBackgroundColor(245, 245, 245, false)
const oCell = oTable.GetCell(0, 0)
oCell.SetWidth("percent", 30)
oParagraph = getTableCellParagraph(oTable, 0, 0)
addTextToParagraph(oParagraph, "Qty.", 30, true)
oParagraph = getTableCellParagraph(oTable, 0, 1)
addTextToParagraph(oParagraph, "Description", 30, true)

for (let i = 1; i < 10; i += 1) {
  oParagraph = getTableCellParagraph(oTable, i, 0)
  addTextFormToParagraph(oParagraph, 30, `Qty${i}`, " ", 9, "left", true)
  oParagraph = getTableCellParagraph(oTable, i, 1)
  addTextFormToParagraph(oParagraph, 30, `Description${i}`, " ", 22, "left", true)
}
oDocument.Push(oTable)
oDocument.RemoveElement(0)
oDocument.RemoveElement(1)

Api.Save()
```
