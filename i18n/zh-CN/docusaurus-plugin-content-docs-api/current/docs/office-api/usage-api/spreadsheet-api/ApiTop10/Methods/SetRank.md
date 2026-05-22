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

调整电子表格中条件格式规则高亮显示的最高或最低值数量。

```javascript editor-xlsx
// How do I choose the exact number of leading values to mark with a formatting rule in a spreadsheet?

// Narrow the spotlight to only the top 2 scores by updating the rank threshold in a spreadsheet.

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
