# AddRows

向当前表格添加新行。

## 语法

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | Number |  | 要添加的行数。 |
| isBefore | 可选 | boolean | false | 指定行是添加在当前行之前还是之后。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

此示例向表格添加新行。

```javascript editor-docx
// How to add rows to the row.

// Get a table row and insert two new rows after it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("Second row");
table.SetWidth("percent", 100);
row.AddRows(1, true);
doc.Push(table);
```
