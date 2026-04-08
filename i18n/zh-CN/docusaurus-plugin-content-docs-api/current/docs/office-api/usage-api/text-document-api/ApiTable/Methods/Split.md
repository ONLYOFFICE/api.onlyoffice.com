# Split

将单元格拆分为指定数量的行和列。

## 语法

```javascript
expression.Split(oCell, nRow, nCol);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 将被拆分的单元格。 |
| nRow | 可选 | Number | 1 | 单元格将拆分成的行数。 |
| nCol | 可选 | Number | 1 | 单元格将拆分成的列数。 |

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

此示例将单元格拆分为指定数量的行和列。

```javascript editor-docx
// How to divide the table cell.

// Split the table cell into specific number of rows and columns.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0);
table.Split(cell, 2, 2);
```
