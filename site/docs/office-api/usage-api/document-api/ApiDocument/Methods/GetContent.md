# GetContent

Returns an array of document elements from the current ApiDocumentContent object.

Inherited from [ApiDocumentContent.GetContent](../../ApiDocumentContent/Methods/GetContent.md).

## Syntax

```javascript
expression.GetContent(bGetCopies);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bGetCopies | Required | boolean |  | Specifies if the copies of the document elements will be returned or not. |

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)[]

## Example

Get all top-level elements of a document as an array in a document.

```javascript editor-docx
// How do I access every element in a document by its position in a document?

// Style individual paragraphs, tables, and content controls by iterating the element array in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This paragraph is the first document element.");
doc.AddElement(0, paragraph);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.AddElement(1, table);
paragraph = Api.CreateParagraph();
paragraph.AddText("This table is the second document element.");
let cell = table.GetCell(0,0);
table.AddElement(cell, 0, paragraph);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This block text content control is the third document element.");
doc.AddElement(2, blockLvlSdt);
let docElements = doc.GetContent(false);
docElements[0].SetBold(true);
docElements[1].SetBackgroundColor(Api.HexColor('#FF6F3D'));
docElements[2].Search("block text content control")[0].SetBold(true);
```
