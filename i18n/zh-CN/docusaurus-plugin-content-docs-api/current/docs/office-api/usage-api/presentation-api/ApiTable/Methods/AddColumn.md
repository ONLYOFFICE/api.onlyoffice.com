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
| isBefore | 可选 | boolean | false | 在指定单元格之前或之后添加新列。如果未指定单元格，则此参数将被忽略。 |

## 返回值

此方法不返回任何数据。

## 示例

在演示文稿中向表格插入新列。

```javascript editor-pptx
// How do I add a new column to a table in a presentation?

// Create a 4x2 table, set its position and then insert a column to it in a presentation.

const presentation = Api.GetPresentation();
presentation.SetSizes(300 * 36000, 190 * 36000);

const table = Api.CreateTable(4, 2);
table.SetPosition(0 * 36000, 60 * 36000);
table.AddColumn(table.GetRow(0).GetCell(1), true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);
```
