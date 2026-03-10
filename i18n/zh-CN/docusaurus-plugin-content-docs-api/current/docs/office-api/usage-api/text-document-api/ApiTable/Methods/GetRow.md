# GetRow

通过在表格中的位置返回表格行。

## 语法

```javascript
expression.GetRow(nPos);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 行在表格中的位置。 |

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

此示例展示如何通过索引获取行。

```javascript editor-docx
// How to get a second row from the table.

// Add a row from the another one.

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
