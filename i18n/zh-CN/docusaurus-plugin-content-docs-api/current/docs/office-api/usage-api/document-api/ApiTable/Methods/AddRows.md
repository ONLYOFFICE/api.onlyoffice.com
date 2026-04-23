# AddRows

向当前表格添加新行。

## 语法

```javascript
expression.AddRows(oCell, nCount, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 将在该单元格之后添加新行。如果未指定，将在表格末尾添加新行。 |
| nCount | 必需 | Number |  | 要添加的行数。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（false）或之后（true）添加新行。如果未指定单元格，则将忽略此参数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

此示例向表格添加新行。

```javascript editor-docx
// How to add rows to the table.

// Get a table cell and insert two new rows after it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
table.AddRows(cell, 2, false);
```
