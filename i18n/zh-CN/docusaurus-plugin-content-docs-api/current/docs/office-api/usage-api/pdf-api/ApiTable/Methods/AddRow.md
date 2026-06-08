# AddRow

向当前表格添加新行。

## 语法

```javascript
expression.AddRow(referenceCell, isBefore);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| referenceCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 用作插入参考的单元格。 |
| isBefore | 可选 | boolean | false | 在指定单元格之前或之后添加新行。如果未指定单元格，则此参数将被忽略。 |

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## 示例

在 PDF 中向表格插入新行

```javascript editor-pdf
// Can I add more rows to an existing table in a PDF?

// Attach a row at a specific position within a table in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.AddRow(table.GetRow(1).GetCell(0), true);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("New row was added here.");
content.Push(paragraph);

page.AddObject(table);
```
