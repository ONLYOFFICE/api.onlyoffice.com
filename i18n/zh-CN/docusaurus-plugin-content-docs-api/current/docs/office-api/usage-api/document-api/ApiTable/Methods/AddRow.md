# AddRow

向当前表格添加新行。

## 语法

```javascript
expression.AddRow(oCell, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 在其后添加新行的单元格。如果未指定，新行将添加到表格末尾。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（false）或之后（true）添加新行。如果未指定单元格，则此参数将被忽略。 |

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## 示例

在文档中向表格插入新行。

```javascript editor-docx
// How do I add an extra row to a table in a document?

// Extend a table by appending a row after a chosen position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 2x2 table and add a new row, so that it becomes 2x3:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddRow(table.GetRow(1).GetCell(0), true);
doc.Push(table);
```
