# GetRGB

返回 RGB 格式的颜色值。

## 语法

```javascript
expression.GetRGB();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

提取电子表格中颜色的红、绿、蓝分量。

```javascript editor-xlsx
// How do I read the individual RGB channel values of a color object in a spreadsheet?

// Break down a color into its numeric channel values and write the result to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let rgbColor = color.GetRGB();
worksheet.GetRange("A4").SetValue("Cell color in RGB format: " + rgbColor);
```
