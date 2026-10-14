# SetTableBorderInsideV

指定将在所有不在父表格最外边缘的垂直表格单元格边框上显示的边框（所有非最左侧或最右侧边框的垂直边框）。

继承自 [ApiTablePr.SetTableBorderInsideV](../../ApiTablePr/Methods/SetTableBorderInsideV.md)。

## 语法

```javascript
expression.SetTableBorderInsideV(type, size, space, color);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 垂直表格单元格边框样式。 |
| size | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前边框的宽度，以磅的八分之一为单位。 |
| space | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的表格垂直单元格间距偏移量，以磅为单位。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中为表格内部各列之间添加垂直边框。

```javascript editor-docx
// How do I draw lines between columns inside a table without affecting its outer edges in a document?

// Separate inner columns visually by applying borders only to the vertical dividers between them in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the inside vertical 4 point orange borders:");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableBorderTop("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderBottom("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderLeft("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderRight("single", 4, 0, Api.Color(51, 51, 51));
table.SetTableBorderInsideV("single", 32, 0, Api.Color(255, 111, 61));
table.SetTableBorderInsideH("single", 4, 0, Api.Color(255, 111, 61));
doc.Push(table);
```
