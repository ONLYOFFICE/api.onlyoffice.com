# GetDateOperator

返回时间段条件的日期运算符。

## 语法

```javascript
expression.GetDateOperator();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlTimePeriods](../../Enumeration/XlTimePeriods.md) \| null

## 示例

此示例从时间段条件格式规则获取日期运算符。

```javascript editor-xlsx
// How to retrieve date operators from time period conditional formatting rules.

// Get conditional formatting rule date operator.

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
