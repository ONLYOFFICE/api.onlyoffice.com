# MergeCells

合并单元格数组。如果合并成功，将返回合并后的单元格，否则结果为 "null"。
💡 任何行中的单元格数和当前表格中的行数可能会更改。

## 语法

```javascript
expression.MergeCells(aCells);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aCells | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md)[] |  | 要合并的单元格数组。 |

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

此示例合并单元格数组。

```javascript editor-docx
// How to merge cells of the table into one.

// Create a table and merge cells into another one.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(5, 5);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.MergeCells([table.GetRow(1).GetCell(1), table.GetRow(1).GetCell(2), table.GetRow(2).GetCell(1), table.GetRow(2).GetCell(2)]);
cell.GetContent().GetElement(0).AddText("Merged cell");
doc.Push(table);
```
