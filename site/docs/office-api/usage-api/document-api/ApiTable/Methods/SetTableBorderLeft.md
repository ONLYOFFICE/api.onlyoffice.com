# SetTableBorderLeft

Sets the border which will be displayed on the left of the current table.

Inherited from [ApiTablePr.SetTableBorderLeft](../../ApiTablePr/Methods/SetTableBorderLeft.md).

## Syntax

```javascript
expression.SetTableBorderLeft(sType, nSize, nSpace, r, g, b);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The left border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current left border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the left part of the table measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

boolean

## Example

Add a border along the left edge of a table in a document.

```javascript editor-docx
// How do I draw a line on the left side of a table in a document?

// Emphasize the start of a table by placing a visible border on its left side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the left 4 point black border:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderTop("single", 4, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
table.SetTableBorderRight("single", 4, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
table.SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
doc.Push(table);
```
