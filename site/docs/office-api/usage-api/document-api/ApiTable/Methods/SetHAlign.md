# SetHAlign

Sets the horizontal alignment to the table.

## Syntax

```javascript
expression.SetHAlign(sType);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | String |  | Horizontal alignment type: may be "left" or "center" or "right". |

## Returns

boolean

## Example

Position a table horizontally on the page in a document.

```javascript editor-docx
// How do I align a table to the left, center, or right in a document?

// Control where a table sits across the width of the page in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
table.SetHAlign("center");
```
