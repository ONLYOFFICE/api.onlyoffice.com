# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the cell.

## Syntax

```javascript
expression.AddElement(nPos, oElement);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position where the current element will be added. |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The document element which will be added at the current position. |

## Returns

boolean

## Example

Place a new paragraph at a specific position inside a table cell in a document.

```javascript editor-docx
// How do I insert a paragraph at a chosen spot within a table cell in a document?

// Populate a cell with a paragraph of text by targeting its exact index in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = table.GetCell(0, 0);
cell.AddElement(0, paragraph);
```
