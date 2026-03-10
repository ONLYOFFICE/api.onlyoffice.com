# GetRow

按索引返回行。

## 语法

```javascript
expression.GetRow(nIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 必需 | number |  | 表格中的行索引（位置）。 |

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## 示例

此示例展示如何通过索引获取行。

```javascript editor-pptx
// How to get a row object from the table.

// Create a table, add rows and columns, then get its row by index.

const presentation = Api.GetPresentation();

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the first row.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);

```
