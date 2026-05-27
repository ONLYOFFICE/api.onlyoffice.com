# GetRGBA

获取颜色的 RGBA 分量。

## 语法

```javascript
expression.GetRGBA();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Object

## 示例

读取电子表格中填充颜色的红、绿、蓝和透明度值。

```javascript editor-xlsx
// How do I retrieve all four color channel values including transparency for a shape in a spreadsheet?

// Capture the full color definition with opacity and display each channel separately in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGBA(110, 160, 180, 127);

const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const rgba = color.GetRGBA();
worksheet.GetRange("A12").SetValue("RGBA: " + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a);
```
