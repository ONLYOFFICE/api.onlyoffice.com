# SetCellMarginTop

指定表格中特定表格单元格的内容上边与单元格边框之间的间距。

继承自 [ApiTableCellPr.SetCellMarginTop](../../ApiTableCellPr/Methods/SetCellMarginTop.md)。

## 语法

```javascript
expression.SetCellMarginTop(nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 单元格顶部上方的空间量值，以二十分之一磅（1/1440 英寸）为单位。如果此值为 `null`，则使用默认表格单元格上边距，否则将用指定值覆盖当前单元格的上边距。 |

## 返回值

boolean

## 示例

在文档中设置单元格内容与其上边缘之间的间距。

```javascript editor-docx
// How do I add padding above the text inside a table cell in a document?

// Push the content away from the top border by controlling the inner gap in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellMarginTop(720);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the top cell margin is 36 points.");
table.SetStyle(tableStyle);
doc.Push(table);
```
