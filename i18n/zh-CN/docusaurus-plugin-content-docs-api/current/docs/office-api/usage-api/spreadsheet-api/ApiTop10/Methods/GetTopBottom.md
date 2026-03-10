# GetTopBottom

返回 "XlTopBottom" 常量，指示排名是从顶部还是底部计算。

## 语法

```javascript
expression.GetTopBottom();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlTopBottom](../../Enumeration/XlTopBottom.md)

## 示例

此示例演示如何获取前 10 项条件的顶部/底部设置。

```javascript editor-xlsx
// How to determine if the condition evaluates top or bottom values.

// Get the top/bottom direction setting from the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(76);
worksheet.GetRange("A4").SetValue(94);
worksheet.GetRange("A5").SetValue(82);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let topBottom = top10Condition.GetTopBottom();
worksheet.GetRange("B1").SetValue("Direction: " + topBottom);

```
