# SetTableBorderAll

Specifies a border which will be displayed on all table cell borders.

Inherited from [ApiTablePr.SetTableBorderAll](../../ApiTablePr/Methods/SetTableBorderAll.md).

## Syntax

```javascript
expression.SetTableBorderAll(sType, nSize, nSpace, r, g, b);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the table cells measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

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
table.SetTableBorderAll("single", 32, 0, 51, 51, 51);
doc.Push(table);
```
