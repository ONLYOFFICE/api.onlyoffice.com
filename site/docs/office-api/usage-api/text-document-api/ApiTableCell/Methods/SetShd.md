# SetShd

Specifies the shading applied to the contents of the table cell.

## Syntax

```javascript
expression.SetShd(sType, r, g, b, isAuto);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type which will be applied to the contents of the current table cell. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| isAuto | Optional | boolean | false | The true value disables the table cell contents shading. |

## Returns

boolean

## Example

This example specifies the shading applied to the contents of the table cell.

```javascript editor-docx
// Create a 3x3 table and add an orange shading to cell #1.

// Set shading to the table cell.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add add an orange shading to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetShd("clear", 255, 111, 61, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
