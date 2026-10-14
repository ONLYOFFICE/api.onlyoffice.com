# GetRGB

获取颜色的 RGB 分量。

## 语法

```javascript
expression.GetRGB();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Object

## 示例

将电子表格中的颜色拆分为独立的红、绿、蓝数值。

```javascript editor-xlsx
// How do I read each channel of a color as its own value in a spreadsheet?

// Apply a color to a cell, then write its individual channel values into the cells below.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(255, 111, 61);

worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);

const rgb = color.GetRGB();
worksheet.GetRange("A4").SetValue("Red: " + rgb.r);
worksheet.GetRange("A5").SetValue("Green: " + rgb.g);
worksheet.GetRange("A6").SetValue("Blue: " + rgb.b);
```
