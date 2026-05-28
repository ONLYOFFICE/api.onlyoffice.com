# SetCellPr

设置当前单元格的单元格属性。

## 语法

```javascript
expression.SetCellPr(oApiTableCellPr);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiTableCellPr | 必需 | [ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md) |  | 将设置到当前表格单元格的属性。 |

## 返回值

boolean

## 示例

在文档中为表格单元格应用完整的格式属性集。

```javascript editor-docx
// How do I transfer a group of cell formatting settings to a specific table cell in a document?

// Copy predefined cell styling and assign it to a target cell all at once in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table1 = Api.CreateTable(3, 3);
table1.SetWidth("percent", 100);
table1.SetStyle(tableStyle);
let tableCellPr = tableStyle.GetTableCellPr();
table1.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
tableCellPr.SetCellMarginTop(720);
doc.Push(table1);
let table2 = Api.CreateTable(3, 3);
table2.SetWidth("percent", 100);
table2.SetStyle(tableStyle);
table2.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
doc.Push(table2);
table2.GetCell(0, 0).SetCellPr(tableCellPr);
```
