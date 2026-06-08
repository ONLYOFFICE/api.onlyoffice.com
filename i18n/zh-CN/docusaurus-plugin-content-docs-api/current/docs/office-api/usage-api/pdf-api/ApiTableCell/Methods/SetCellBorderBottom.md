# SetCellBorderBottom

设置应在当前表格单元格底部显示的边框。

## 语法

```javascript
expression.SetCellBorderBottom(borderWidth, fill);
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderWidth | 必需 | [mm](../../Enumeration/mm.md) |  | 当前边框的宽度。 |
| fill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充当前边框的颜色或图案。 |

## 返回值

boolean

## 示例

在 PDF 中为表格单元格添加底部边框。

```javascript editor-pdf
// How do I create a border on the bottom edge of a cell in a PDF?

// Draw a styled line along the bottom of a table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderBottom(2, fill);

page.AddObject(table);
```
