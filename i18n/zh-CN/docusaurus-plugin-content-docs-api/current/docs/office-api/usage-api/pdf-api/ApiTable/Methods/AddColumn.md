# AddColumn

在当前表格末尾添加新列。

## 语法

```javascript
expression.AddColumn(referenceCell, before);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| referenceCell | 可选 | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | 用作插入参考的单元格。 |
| before | 可选 | boolean | false | 在指定单元格之前或之后添加新列。如果未指定单元格，则此参数将被忽略。 |

## 返回值

boolean

## 示例

在 PDF 中向表格插入新列

```javascript editor-pdf
// Can I add more columns to an existing table in a PDF?

// Attach a column at a specific position within a table in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetPosition(3, 170);
table.AddColumn(table.GetRow(0).GetCell(1), true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

page.AddObject(table);
```
