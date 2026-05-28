# GetNegativeBarColor

返回数据条的负值条颜色。

## 语法

```javascript
expression.GetNegativeBarColor();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取电子表格中表示负值的条所使用的填充颜色。

```javascript editor-xlsx
// How do I find out what color is applied to negative data bars in a spreadsheet?

// Confirm the distinct color assigned to bars that display below-zero values in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(-50);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(-25);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let negativeColor = dataBar.GetNegativeBarColor();

worksheet.GetRange("C1").SetValue("Negative Color:");
worksheet.GetRange("C2").SetValue(negativeColor ? "Set" : "None");
```
