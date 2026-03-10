# GetRank

返回前 10 项条件的排名值。

## 语法

```javascript
expression.GetRank();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取前 10 项条件的排名值。

```javascript editor-xlsx
// How to retrieve the number of top or bottom values to highlight in the condition.

// Get the rank value for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(15);
worksheet.GetRange("A3").SetValue(25);
worksheet.GetRange("A4").SetValue(35);
worksheet.GetRange("A5").SetValue(45);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let rank = top10Condition.GetRank();
worksheet.GetRange("B1").SetValue("Current rank: " + rank);

```
