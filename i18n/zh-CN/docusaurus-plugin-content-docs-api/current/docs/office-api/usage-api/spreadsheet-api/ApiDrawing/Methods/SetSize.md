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

此示例设置形状边界框的大小。

```javascript editor-xlsx
// How to change the size of the drawing.

// Resize a drawing by setting its width and height.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
