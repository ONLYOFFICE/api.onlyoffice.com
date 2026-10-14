# AddColumns

向当前表格添加新列。

## 语法

```javascript
expression.AddColumns(oCell, nCount, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 在其之前或之后添加新列的单元格。如果未指定，则在表格末尾添加新列。 |
| nCount | 必需 | Number |  | 要添加的列数。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前（true）或之后（false）添加新列。如果未指定单元格，则忽略此参数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

在文档中向现有表格添加额外的列。

```javascript editor-docx
// Insert several columns in a single call instead of adding them one by one in a document.

// Expand a table sideways by placing new columns at a chosen position in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.Cells[0][0];
cell.GetContent().GetElement(0).AddText("Two new columns were added after this cell.");
table.AddColumns(cell, 2, false);
```
