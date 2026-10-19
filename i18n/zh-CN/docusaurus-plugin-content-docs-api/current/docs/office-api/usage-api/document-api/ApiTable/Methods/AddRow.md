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
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 在其之前或之后添加新行的单元格。如果未指定，则在表格末尾添加新行。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（true）或之后（false）添加新行。如果未指定单元格，则忽略此参数。 |

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## 示例

在文档中向表格插入新行。

```javascript editor-docx
// Make room for more data by adding an extra row to a table in a document.

// Extend a table by inserting a row before a chosen row in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns and insert a new row before the second one, so that the table has 3 rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddRow(table.GetRow(1).GetCell(0), true);
doc.Push(table);
```
