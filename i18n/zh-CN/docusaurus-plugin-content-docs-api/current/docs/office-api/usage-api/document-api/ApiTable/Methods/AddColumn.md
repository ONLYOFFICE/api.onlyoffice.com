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
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 将在该单元格之后添加新列。如果未指定，将在表格末尾添加新列。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（false）或之后（true）添加新列。如果未指定单元格，则将忽略此参数。 |

## 返回值

boolean

## 示例

此示例向表格添加新列。

```javascript editor-docx
// How to insert a column to the table.

// Get a table cell from the row and add it as a column.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 2x2 table and add a new column, so that it becomes 3x2:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddColumn(table.GetRow(0).GetCell(1), true);
doc.Push(table);
```
