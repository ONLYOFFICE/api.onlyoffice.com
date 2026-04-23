# SetNumberFormat

指定单元格中的数字应视为数字、货币、日期、时间等还是仅作为文本。

## 语法

```javascript
expression.SetNumberFormat(sFormat);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | 必需 | string |  | 指定应用于单元格中数字的掩码。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例指定单元格中的数字应视为数字、货币、日期、时间等还是仅作为文本。

```javascript editor-xlsx
// How to set number format of cells.

// Get a range and specify number format of its cells.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 30);
worksheet.SetColumnWidth(1, 30);
worksheet.GetRange("A2").SetNumberFormat("General");
worksheet.GetRange("A2").SetValue("123456");
worksheet.GetRange("B2").SetValue("General");
worksheet.GetRange("A3").SetNumberFormat("0.00");
worksheet.GetRange("A3").SetValue("123456");
worksheet.GetRange("B3").SetValue("Number");
worksheet.GetRange("A4").SetNumberFormat("$#,##0.00");
worksheet.GetRange("A4").SetValue("123456");
worksheet.GetRange("B4").SetValue("Currency");
worksheet.GetRange("A5").SetNumberFormat("_($* #,##0.00_)");
worksheet.GetRange("A5").SetValue("123456");
worksheet.GetRange("B5").SetValue("Accounting");
worksheet.GetRange("A6").SetNumberFormat("m/d/yyyy");
worksheet.GetRange("A6").SetValue("123456");
worksheet.GetRange("B6").SetValue("DateShort");
worksheet.GetRange("A7").SetNumberFormat("[$-F800]dddd, mmmm dd, yyyy");
worksheet.GetRange("A7").SetValue("123456");
worksheet.GetRange("B7").SetValue("DateLong");
worksheet.GetRange("A8").SetNumberFormat("[$-F400]h:mm:ss AM/PM");
worksheet.GetRange("A8").SetValue("123456");
worksheet.GetRange("B8").SetValue("Time");
worksheet.GetRange("A9").SetNumberFormat("0.00%");
worksheet.GetRange("A9").SetValue("123456");
worksheet.GetRange("B9").SetValue("Percentage");
worksheet.GetRange("A10").SetNumberFormat("0%");
worksheet.GetRange("A10").SetValue("123456");
worksheet.GetRange("B10").SetValue("Percent");
worksheet.GetRange("A11").SetNumberFormat("# ?/?");
worksheet.GetRange("A11").SetValue("123456");
worksheet.GetRange("B11").SetValue("Fraction");
worksheet.GetRange("A12").SetNumberFormat("0.00E+00");
worksheet.GetRange("A12").SetValue("123456");
worksheet.GetRange("B12").SetValue("Scientific");
worksheet.GetRange("A13").SetNumberFormat("@");
worksheet.GetRange("A13").SetValue("123456");
worksheet.GetRange("B13").SetValue("Text");
```
