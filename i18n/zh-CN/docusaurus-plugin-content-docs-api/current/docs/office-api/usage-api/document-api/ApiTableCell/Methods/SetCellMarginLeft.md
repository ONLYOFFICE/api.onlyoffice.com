# SetCellMarginLeft

指定表格中特定表格单元格的内容左边与单元格边框之间的间距。

继承自 [ApiTableCellPr.SetCellMarginLeft](../../ApiTableCellPr/Methods/SetCellMarginLeft.md)。

## 语法

```javascript
expression.SetCellMarginLeft(nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 单元格左侧的空间量值，以二十分之一磅（1/1440 英寸）为单位。如果此值为 `null`，则使用默认表格单元格左边距，否则将用指定值覆盖当前单元格的左边距。 |

## 返回值

boolean

## 示例

在文档中设置单元格内容与其左边缘之间的间距。

```javascript editor-docx
// How do I add padding to the left side of text inside a table cell in a document?

// Push the content away from the left border by controlling the inner gap in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellMarginLeft(720);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the left cell margin is 36 points.");
table.SetStyle(tableStyle);
doc.Push(table);
```
