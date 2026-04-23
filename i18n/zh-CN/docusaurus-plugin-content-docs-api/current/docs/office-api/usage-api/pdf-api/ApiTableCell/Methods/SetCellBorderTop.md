# SetCellBorderTop

设置应在当前表格单元格顶部显示的边框。

## 语法

```javascript
expression.SetCellBorderTop(fSize, oApiFill);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fSize | 必需 | [mm](../../Enumeration/mm.md) |  | 当前边框的宽度。 |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充当前边框的颜色或图案。 |

## 返回值

boolean

## 示例

如何设置单元格顶部边框及其填充颜色。

```javascript editor-pdf
// Create table and set its cell top border.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderTop(2, fill);

page.AddObject(table);

```
