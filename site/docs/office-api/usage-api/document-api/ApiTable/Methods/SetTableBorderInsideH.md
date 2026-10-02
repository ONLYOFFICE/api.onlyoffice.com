# SetTableBorderInsideH

Specifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge of the parent table (all horizontal borders which are not the topmost or bottommost borders).

Inherited from [ApiTablePr.SetTableBorderInsideH](../../ApiTablePr/Methods/SetTableBorderInsideH.md).

## Syntax

```javascript
expression.SetTableBorderInsideH(sType, nSize, nSpace, r, g, b);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The horizontal table cell border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the horizontal table cells of the table measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

boolean

## Example

Add horizontal borders between interior rows of a table in a document.

```javascript editor-docx
// How do I draw lines between rows inside a table without affecting its outer edges in a document?

// Separate inner rows visually by applying borders only to the horizontal dividers between them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the inside horizontal 4 point orange borders:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderTop("single", 4, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 4, 0, 51, 51, 51);
table.SetTableBorderRight("single", 4, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
table.SetTableBorderInsideH("single", 32, 0, 255, 111, 61);
doc.Push(table);
```
