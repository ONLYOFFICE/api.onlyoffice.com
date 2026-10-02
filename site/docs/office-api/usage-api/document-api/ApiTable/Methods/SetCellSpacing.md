# SetCellSpacing

Specifies the default table cell spacing (the spacing between adjacent cells and the edges of the table).

Inherited from [ApiTablePr.SetCellSpacing](../../ApiTablePr/Methods/SetCellSpacing.md).

## Syntax

```javascript
expression.SetCellSpacing(nValue);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | Spacing value measured in twentieths of a point (1/1440 of an inch). `"Null"` means that no spacing will be applied. |

## Returns

boolean

## Example

Set the spacing between cells of a table in a document.

```javascript editor-docx
// How do I control the gap between table cells in a document?

// Add breathing room between cells to improve table readability in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the cell spacing to half an inch:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetCellSpacing(720);
doc.Push(table);
```
