# RemoveColumn

删除包含指定单元格的表格列。

## 语法

```javascript
expression.RemoveColumn(cell);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cell | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 位于将被删除的列中的单元格。 |

## 返回值

boolean

## 示例

从文档中的表格删除列。

```javascript editor-docx
// Remove the column that contains a specified cell from a table in a document.

// Narrow a table by eliminating an unwanted column in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 3 rows and 3 columns and remove the second column, so that the table has 2 columns:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(2).GetCell(1);
table.RemoveColumn(cell);
doc.Push(table);
```
