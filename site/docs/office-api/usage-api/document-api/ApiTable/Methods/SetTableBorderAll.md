# SetTableBorderAll

Specifies a border which will be displayed on all table cell borders.

Inherited from [ApiTablePr.SetTableBorderAll](../../ApiTablePr/Methods/SetTableBorderAll.md).

## Syntax

```javascript
expression.SetTableBorderAll(type, size, space, color);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| size | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current border measured in eighths of a point. |
| space | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the table cells measured in points used to place this border. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Add a uniform border around and inside a table in a document.

```javascript editor-docx
// How do I apply the same border style to every edge of a table in a document?

// Give a table a consistent outline and interior grid by setting all borders at once in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add 4 point black border for the entrire table:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderAll("single", 32, 0, Api.Color(51, 51, 51));
doc.Push(table);
```
