# GetColumnWidth

返回当前表格中指定列（按索引）的宽度。

## 语法

```javascript
expression.GetColumnWidth(columnIndex);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| columnIndex | 必需 | number |  | 从零开始的列索引。 |

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

测量演示文稿中表格列的宽度。

```javascript editor-pptx
// How do I find out how wide a table column is in a presentation?

// Read the column width value and display it in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(3, 3);
table.SetColumnWidth(0, Api.MillimetersToEmus(100));
const width = table.GetColumnWidth(0);

const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Column 0 width: ' + width + ' EMU');
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
```
