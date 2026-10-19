# GetRow

通过在表格中的位置返回表格行。

## 语法

```javascript
expression.GetRow(rowIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowIndex | 必需 | number |  | 表格中的行索引。 |

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## 示例

按位置从文档中的表格检索特定行。

```javascript editor-docx
// Get a row by its zero-based index to work with its cells in a document.

// Use an existing row as a reference point to insert a new row in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns, get the second row and insert a new row before it, so that the table has 3 rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddRow(table.GetRow(1).GetCell(0), true);
doc.Push(table);
```
