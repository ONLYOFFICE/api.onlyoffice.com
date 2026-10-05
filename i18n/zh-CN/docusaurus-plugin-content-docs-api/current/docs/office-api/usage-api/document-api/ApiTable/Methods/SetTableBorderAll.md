# SetTableBorderAll

指定将在所有表格单元格边框上显示的边框。

继承自 [ApiTablePr.SetTableBorderAll](../../ApiTablePr/Methods/SetTableBorderAll.md)。

## 语法

```javascript
expression.SetTableBorderAll(sType, nSize, nSpace, r, g, b);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 边框样式。 |
| nSize | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前边框的宽度，以磅的八分之一为单位。 |
| nSpace | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的表格单元格间距偏移量，以磅为单位。 |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量值。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量值。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量值。 |

## 返回值

boolean

## 示例

在文档中为表格的四周和内部添加统一边框。

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
