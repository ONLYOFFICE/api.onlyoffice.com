# SetRank

设置前 10 项条件的排名值。

## 语法

```javascript
expression.SetRank(rank);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rank | 必需 | number |  | 排名值。 |

## 返回值

此方法不返回任何数据。

## 示例

更改电子表格中前 10 条件的排名值。

```javascript editor-xlsx
// How to set the number of top or bottom values to highlight in the condition in a spreadsheet.

// Change the rank value for the top 10 rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(76);
worksheet.GetRange("A5").SetValue(94);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Top 10 values");
top10Condition.SetRank(2);
worksheet.GetRange("B2").SetValue("After: Top 2 values");
```
