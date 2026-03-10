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

此示例获取颜色的 RGB 格式并将其插入到表格中。

```javascript editor-xlsx
// How to get a RGB color format.

// Convert a color to the RGB values.

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let rgbColor = color.GetRGB();
worksheet.GetRange("A4").SetValue("Cell color in RGB format: " + rgbColor);
```
