# SetTableBorderBottom

设置将在当前表格底部显示的边框。

继承自 [ApiTablePr.SetTableBorderBottom](../../ApiTablePr/Methods/SetTableBorderBottom.md)。

## 语法

```javascript
expression.SetTableBorderBottom(type, size, space, color);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 底部边框样式。 |
| size | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前底部边框的宽度，以磅的八分之一为单位。 |
| space | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的表格底部间距偏移量，以磅为单位。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中沿表格下边缘添加边框。

```javascript editor-docx
// How do I draw a line under the last row of a table in a document?

// Emphasize the end of a table by placing a visible border on its bottom side in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the bottom 4 point black border:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderTop("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderBottom("single", 32, 0, Api.Color(51, 51, 51));
table.SetTableBorderLeft("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderRight("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderInsideV("single", 4, 0, Api.Color(255, 111, 61));
table.SetTableBorderInsideH("single", 4, 0, Api.Color(255, 111, 61));
doc.Push(table);
```
