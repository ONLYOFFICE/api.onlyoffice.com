# AddRow

向当前表格添加新行。

## 语法

```javascript
expression.AddRow(oCell, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 如果未指定，将在表格末尾添加新行。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前或之后添加新行。如果未指定单元格，则忽略此参数。 |

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## 示例

How to insert a row to the table.

```javascript editor-pdf
// Create a 2x4 table, set its position and then insert a row to it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("New row was added here.");
content.Push(paragraph);

page.AddObject(table);
```
