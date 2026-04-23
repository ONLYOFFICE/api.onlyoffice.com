# GetPercent

返回前 10 项排名是否基于百分比。

## 语法

```javascript
expression.GetPercent();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何获取前 10 项条件的百分比模式。

```javascript editor-xlsx
// How to check if the condition uses percentage values instead of count values.

// Get the percentage mode setting for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(45);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(89);
worksheet.GetRange("A5").SetValue(23);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let isPercent = top10Condition.GetPercent();
worksheet.GetRange("B1").SetValue("Percentage mode: " + isPercent);

```
