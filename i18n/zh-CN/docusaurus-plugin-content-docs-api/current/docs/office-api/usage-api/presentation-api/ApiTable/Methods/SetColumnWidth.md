# SetColumnWidth

设置当前表格中指定列的宽度。

## 语法

```javascript
expression.SetColumnWidth(columnIndex, width);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| columnIndex | 必需 | number |  | 从零开始的列索引。 |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位测量的列宽。 |

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

设置演示文稿中表格列的宽度。

```javascript editor-pptx
// Specify different widths for individual table columns.

// Create a table and set custom widths for specific columns.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(3, 3);
const widthCol1 = table.SetColumnWidth(1, Api.MillimetersToEmus(50));
const widthCol2 = table.SetColumnWidth(2, 0);

slide.RemoveAllObjects();
slide.AddObject(table);

const row0 = table.GetRow(0);
const cell0 = row0.GetCell(0);
const content0 = cell0.GetContent();
const paragraph1 = Api.CreateParagraph();
paragraph1.AddText('Middle column width: ' + Api.EmusToMillimeters(widthCol1) + ' mm');
content0.Push(paragraph1);

const row1 = table.GetRow(1);
const cell1 = row1.GetCell(0);
const content1 = cell1.GetContent();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Right column width (set to 0): ' + Api.EmusToMillimeters(widthCol2) + ' mm');
content1.Push(paragraph2);
```
