# SetWidth

设置当前表格单元格的首选宽度。

## 语法

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TableWidth](../../Enumeration/TableWidth.md) |  | 宽度值类型，来自可用的宽度值类型之一。 |
| nValue | 可选 | number |  | 表格单元格宽度值，以正整数表示。 |

## 返回值

boolean

## 示例

此示例设置当前表格单元格的首选宽度。

```javascript editor-docx
// Resize the width of the cell.

// Change the width of the cell.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("All cells are at least 2 inches wide:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetWidth("twips", 2880);
table.SetStyle(tableStyle);
doc.Push(table);
```
