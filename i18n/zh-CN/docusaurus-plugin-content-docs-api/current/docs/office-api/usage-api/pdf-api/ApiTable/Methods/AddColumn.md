# AddColumn

在当前表格末尾添加新列。

## 语法

```javascript
expression.AddColumn(oCell, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 如果未指定，将在表格末尾添加新列。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前或之后添加新列。如果未指定单元格，则忽略此参数。 |

## 返回值

boolean

## 示例

How to insert a column to the table.

```javascript editor-pdf
// Create a 2x4 table, set its position and then insert a column to it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetPosition(3, 170);
table.AddColumn(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

page.AddObject(table);
```
