# SetTableBorderRight

Sets the border which will be displayed on the right of the current table.

Inherited from [ApiTablePr.SetTableBorderRight](../../ApiTablePr/Methods/SetTableBorderRight.md).

## Syntax

```javascript
expression.SetTableBorderRight(type, size, space, color);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The right border style. |
| size | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current right border measured in eighths of a point. |
| space | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the right part of the table measured in points used to place this border. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Set a border along the right side of a table in a document.

```javascript editor-docx
// How do I apply a thick border to the right edge of a table in a document?

// Distinguish the right side of a table from surrounding content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the right 4 point black border:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderTop("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderBottom("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderLeft("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderRight("single", 32, 0, Api.Color(51, 51, 51));
table.SetTableBorderInsideV("single", 4, 0, Api.Color(255, 111, 61));
table.SetTableBorderInsideH("single", 4, 0, Api.Color(255, 111, 61));
doc.Push(table);
```
