# SetPaddings

Sets the table paddings.
If table is inline, then only left padding is applied.

## Syntax

```javascript
expression.SetPaddings(nLeft, nTop, nRight, nBottom);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | Number |  | Left padding. |
| nTop | Required | Number |  | Top padding. |
| nRight | Required | Number |  | Right padding. |
| nBottom | Required | Number |  | Bottom padding. |

## Returns

boolean

## Example

Set the spacing between cell content and cell edges in a table in a document.

```javascript editor-docx
// How do I add inner spacing to all cells of a table in a document?

// Control how much breathing room text has inside each table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
table.SetPaddings(10, 10, 5, 5);
```
