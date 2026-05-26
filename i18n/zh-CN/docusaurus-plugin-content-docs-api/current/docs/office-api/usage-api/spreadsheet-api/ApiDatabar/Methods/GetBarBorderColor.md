# GetBarBorderColor

返回数据条的边框颜色。

## 语法

```javascript
expression.GetBarBorderColor();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取电子表格中应用于数据条的边框颜色。

```javascript editor-xlsx
// How do I find out what border color is used on data bars in a spreadsheet?

// Inspect the outline color of data bars to verify their visual style in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let borderColor = dataBar.GetBarBorderColor();

worksheet.GetRange("C1").SetValue("Border Color:");
worksheet.GetRange("C2").SetValue(borderColor ? "Set" : "None");
```
