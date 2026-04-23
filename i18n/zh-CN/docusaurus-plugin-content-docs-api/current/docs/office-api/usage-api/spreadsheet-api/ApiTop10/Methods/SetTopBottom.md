# SetTopBottom

设置 "XlTopBottom" 常量，指示排名是从顶部还是底部计算。

## 语法

```javascript
expression.SetTopBottom(topBottom);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| topBottom | 必需 | [XlTopBottom](../../Enumeration/XlTopBottom.md) |  | 排名方向。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置前 10 项条件的顶部/底部方向。

```javascript editor-xlsx
// How to configure whether the condition evaluates top or bottom values.

// Set the top/bottom direction for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Revenue");
worksheet.GetRange("A2").SetValue(15000);
worksheet.GetRange("A3").SetValue(22000);
worksheet.GetRange("A4").SetValue(8000);
worksheet.GetRange("A5").SetValue(18000);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Top values");
top10Condition.SetTopBottom("xlTop10Bottom");
worksheet.GetRange("B2").SetValue("After: Bottom values");

```
