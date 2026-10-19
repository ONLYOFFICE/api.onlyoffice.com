# GetTintAndShade

返回应用于颜色的亮度偏移。

## 语法

```javascript
expression.GetTintAndShade();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中主题颜色所存储的亮度偏移量。

```javascript editor-xlsx
// The same theme color can be stored lightened or darkened, and cells keep that shift.

// Fill a cell with a lightened accent and write the shift read back from it.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetFillColor(Api.ThemeColor("accent1", 0.4));

let fill = worksheet.GetRange("A1").GetFillColor();
worksheet.GetRange("A3").SetValue("Theme: " + fill.GetThemeName());
worksheet.GetRange("A4").SetValue("Tint: " + fill.GetTintAndShade());
worksheet.GetRange("A5").SetValue("Color: " + fill.GetHex());
```
