# SetDateOperator

设置时间段条件的日期运算符。

## 语法

```javascript
expression.SetDateOperator(DateOperator);
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| DateOperator | 必需 | [XlTimePeriods](../../Enumeration/XlTimePeriods.md) |  | 时间段条件的日期运算符。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置时间段条件格式规则的日期运算符。

```javascript editor-xlsx
// How to change date operators in time period conditional formatting rules.

// Set conditional formatting rule date operator.

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

worksheet.GetRange("C1").SetValue("Original operator:");
worksheet.GetRange("C2").SetValue(condition1.GetDateOperator() || "None");

condition1.SetDateOperator("xlLastWeek");

worksheet.GetRange("C4").SetValue("New operator:");
worksheet.GetRange("C5").SetValue(condition1.GetDateOperator() || "None");

```
