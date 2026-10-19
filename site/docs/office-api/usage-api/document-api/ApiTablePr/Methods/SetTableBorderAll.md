# SetTableBorderAll

Specifies a border which will be displayed on all table cell borders.

## Syntax

```javascript
expression.SetTableBorderAll(type, size, space, color);
```

`expression` - A variable that represents an [ApiTablePr](../ApiTablePr.md) class.

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

Apply a uniform border around and inside every edge of a table in a document.

```javascript editor-docx
// How do I add borders to all sides of every cell in a table in a document?

// Draw consistent lines along all internal and external table edges in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add 4 point black border for the entrire table:");
const tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
const tablePr = tableStyle.GetTablePr();
const table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderAll("single", 32, 0, Api.Color(51, 51, 51));
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
