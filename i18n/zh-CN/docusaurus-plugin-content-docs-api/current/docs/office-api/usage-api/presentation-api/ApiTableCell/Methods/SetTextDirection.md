# SetTextDirection

指定当前表格单元格的文本流动方向。

## 语法

```javascript
expression.SetTextDirection(sType);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TextFlowDirection](../../Enumeration/TextFlowDirection.md) |  | 文本流动方向的类型。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例指定当前表格单元格的文本流动方向。

```javascript editor-pptx
// How to set text direction of the table cell.

// Create a table and set the text direction for the ApiTableCell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);
const cell = row.GetCell(0);
cell.SetTextDirection("tbrl");
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);

```
