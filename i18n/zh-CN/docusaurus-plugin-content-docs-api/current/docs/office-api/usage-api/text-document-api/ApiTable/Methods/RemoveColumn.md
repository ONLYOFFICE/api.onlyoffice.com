# RemoveColumn

删除包含指定单元格的表格列。

## 语法

```javascript
expression.RemoveColumn(oCell);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 必需 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 位于将被删除的列中的单元格。 |

## 返回值

boolean

## 示例

此示例删除包含指定单元格的表格列。

```javascript editor-docx
// How to remove the column from the table.

// Create a table, get one of its cells and delete the column.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and remove one column (the second one), so that it becomes 2x3:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(2).GetCell(1);
table.RemoveColumn(cell);
doc.Push(table);
```
