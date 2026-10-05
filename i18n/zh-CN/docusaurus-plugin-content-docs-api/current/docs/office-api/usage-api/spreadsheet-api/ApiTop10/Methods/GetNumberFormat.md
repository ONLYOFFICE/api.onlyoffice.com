# GetNumberFormat

返回当条件格式规则计算结果为 true 时应用于单元格的数字格式。

继承自 [ApiFormatCondition.GetNumberFormat](../../ApiFormatCondition/Methods/GetNumberFormat.md)。

## 语法

```javascript
expression.GetNumberFormat();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在电子表格中读取分配给前 10 项条件格式规则的数字格式。

```javascript editor-xlsx
// How do I find what number format a top 10 conditional formatting rule uses in a spreadsheet?

// Check the display format applied to highlighted top values in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let currentFormat = condition1.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Current format:");
worksheet.GetRange("C2").SetValue(currentFormat || "General");
```
