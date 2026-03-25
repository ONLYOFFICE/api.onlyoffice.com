# SetPercent

设置前 10 项排名是否基于百分比。

## 语法

```javascript
expression.SetPercent(percent);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| percent | 必需 | boolean |  | 如果排名基于百分比则为 true，如果基于计数则为 false。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置前 10 项条件的百分比模式。

```javascript editor-xlsx
// How to configure if the condition uses percentage values instead of count values.

// Set the percentage mode for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Grades");
worksheet.GetRange("A2").SetValue(78);
worksheet.GetRange("A3").SetValue(85);
worksheet.GetRange("A4").SetValue(92);
worksheet.GetRange("A5").SetValue(69);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Count mode");
top10Condition.SetPercent(true);
worksheet.GetRange("B2").SetValue("After: Percentage mode");

```
