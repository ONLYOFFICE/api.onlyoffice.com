# SetCellBorderLeft

设置应在当前表格单元格左侧显示的边框。

## 语法

```javascript
expression.SetCellBorderLeft(fSize, oApiFill);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fSize | 必需 | [mm](../../Enumeration/mm.md) |  | 当前边框的宽度。 |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充当前边框的颜色或图案。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置应在表格单元格左侧显示的边框。

```javascript editor-pptx
// How to set cell left border with its fill color.

// Create table and set its cell left border.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
cell.SetCellBorderLeft(2, fill);

slide.RemoveAllObjects();
slide.AddObject(table);

```
