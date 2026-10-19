# AddColumn

向当前表格添加新列。

## 语法

```javascript
expression.AddColumn(oCell, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 在其之前或之后添加新列的单元格。如果未指定，则在表格末尾添加新列。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（true）或之后（false）添加新列。如果未指定单元格，则忽略此参数。 |

## 返回值

boolean

## 示例

在文档中向现有表格插入额外的列以扩展其结构。

```javascript editor-docx
// Widen a table by adding a column next to an existing one in a document.

// Grow a table horizontally by placing a new column at a chosen position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns and insert a new column before the second one, so that the table has 3 columns:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddColumn(table.GetRow(0).GetCell(1), true);
doc.Push(table);
```
