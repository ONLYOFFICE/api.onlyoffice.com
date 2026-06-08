# SetCellSpacing

Specifies the default table cell spacing (the spacing between adjacent cells and the edges of the table).

## Syntax

```javascript
expression.SetCellSpacing(nValue);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | Spacing value measured in twentieths of a point (1/1440 of an inch). `"Null"` means that no spacing will be applied. |

## Returns

boolean

## Example

Add uniform gaps between all cells of a table in a document.

```javascript editor-docx
// How do I control the space between individual cells in a document?

// Space out table cells evenly to improve readability in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the cell spacing to half an inch:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
tablePr.SetCellSpacing(720);
doc.Push(table);
```
