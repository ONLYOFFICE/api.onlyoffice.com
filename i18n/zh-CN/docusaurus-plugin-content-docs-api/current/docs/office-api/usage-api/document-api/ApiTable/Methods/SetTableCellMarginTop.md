# SetTableCellMarginTop

指定在父表格（或表格行）中所有表格单元格的单元格内容顶部范围与上边框之间保留的空间量。

继承自 [ApiTablePr.SetTableCellMarginTop](../../ApiTablePr/Methods/SetTableCellMarginTop.md)。

## 语法

```javascript
expression.SetTableCellMarginTop(nValue);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 单元格顶部范围上方的空间量值，以磅的二十分之一（1/1440 英寸）为单位。 |

## 返回值

boolean

## 示例

在文档中设置表格中每个单元格的内容与上边缘之间的间距。

```javascript editor-docx
// How do I add breathing room above the text inside every table cell in a document?

// Push cell content away from the top border of each cell in a table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the top cell margin is 36 points.");
table.SetTableCellMarginTop(720);
doc.Push(table);
```
