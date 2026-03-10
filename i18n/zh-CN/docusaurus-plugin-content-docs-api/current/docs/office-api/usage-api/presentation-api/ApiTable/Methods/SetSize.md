# SetSize

设置表格大小。

## 语法

```javascript
expression.SetSize(width, height);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位测量的表格宽度。 |
| height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位测量的表格高度。 |

## 返回值

此方法不返回任何数据。

## 示例

This example shows how to set the size of a table.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 4);
table.SetSize(220 * 36000, 110 * 36000);

const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Table size: 220 x 110 millimeters.');
content.Push(paragraph);

slide.AddObject(table);

```
