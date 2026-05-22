# GetDateOperator

返回时间段条件的日期运算符。

## 语法

```javascript
expression.GetDateOperator();
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlTimePeriods](../../Enumeration/XlTimePeriods.md) \| null

## 示例

检索电子表格中基于日期的格式规则使用的时间段比较类型。

```javascript editor-xlsx
// How do I check which date period a conditional formatting rule is set to highlight in a spreadsheet?

// Inspect the date condition of a rule to confirm it targets the intended time window in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Dates");
worksheet.GetRange("A2").SetValue("2023-01-15");
worksheet.GetRange("A3").SetValue("2023-02-20");
worksheet.GetRange("A4").SetValue("2023-03-10");
worksheet.GetRange("A5").SetValue("2023-04-05");
worksheet.GetRange("A6").SetValue("2023-05-25");

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlTimePeriod", "xlThisMonth");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let dateOperator = condition1.GetDateOperator();

worksheet.GetRange("C1").SetValue("Date operator:");
worksheet.GetRange("C2").SetValue(dateOperator ? dateOperator : "None");
```
