# SetCellMarginLeft

指定表格中特定单元格的当前单元格内容左侧
与左边框之间应保留的空间量。

## 语法

```javascript
expression.SetCellMarginLeft(nValue);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 如果此值为 `null`，则使用默认表格单元格左边距，否则用指定值覆盖当前单元格的左边距。 |

## 返回值

此方法不返回任何数据。

## 示例

设置演示文稿中表格单元格文本与左边缘之间的间距。

```javascript editor-pptx
// How do I add space to the left of text in a table cell in a presentation?

// Adjust the left margin to control padding in a table cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginLeft(720);

slide.RemoveAllObjects();
slide.AddObject(table);
```
