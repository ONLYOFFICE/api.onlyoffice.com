# SetSize

设置对象（图像、形状、图表）边界框的大小。

## 语法

```javascript
expression.SetSize(nWidth, nHeight);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象宽度，以英制单位测量。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象高度，以英制单位测量。 |

## 返回值

此方法不返回任何数据。

## 示例

通过指定宽度和高度在电子表格中将绘图调整为精确尺寸。

```javascript editor-xlsx
// How do I make a drawing larger or smaller in a spreadsheet?

// Scale a shape to fit a particular area by defining its bounding box dimensions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
