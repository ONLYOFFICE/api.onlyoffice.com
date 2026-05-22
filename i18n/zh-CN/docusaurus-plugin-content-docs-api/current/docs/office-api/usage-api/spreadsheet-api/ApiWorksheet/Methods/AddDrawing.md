# AddDrawing

将分离的绘图对象（例如 ApiDrawing.Copy 返回的副本）添加到工作表的指定锚点。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.AddDrawing(oDrawing, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | 要添加的绘图对象。 |
| nFromCol | 必需 | number |  | 绘图左上角将放置的列号。 |
| nColOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromCol 列到绘图左上角的偏移量，以英制度量单位测量。 |
| nFromRow | 必需 | number |  | 绘图左上角将放置的行号。 |
| nRowOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromRow 行到绘图左上角的偏移量，以英制度量单位测量。 |

## 返回值

boolean

## 示例

在电子表格中将分离的绘图放置到工作表的所选单元格锚点。

```javascript editor-xlsx
// How do I attach a copied drawing to a sheet at a specific cell anchor in a spreadsheet?

// Take a drawing returned by Copy and add it to the sheet next to the original in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let copyDrawing = shape.Copy();
worksheet.AddDrawing(copyDrawing, 4, 2 * 36000, 2, 3 * 36000);
```
