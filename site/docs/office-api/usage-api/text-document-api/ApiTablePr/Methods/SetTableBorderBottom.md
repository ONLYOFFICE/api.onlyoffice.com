# SetTableBorderBottom

Sets the border which will be displayed at the bottom of the current table.

## Syntax

```javascript
expression.SetTableBorderBottom(sType, nSize, nSpace, r, g, b);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The bottom border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current bottom border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the bottom part of the table measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

boolean

## Example

This example sets the border which will be displayed at the bottom of the table.

```javascript editor-docx
// How to find out a style that will be applied to the table elements whish satisfy the condition.

// Retrieve a conditional table style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the bottom 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyle(tableStyle);
doc.Push(table);
```
