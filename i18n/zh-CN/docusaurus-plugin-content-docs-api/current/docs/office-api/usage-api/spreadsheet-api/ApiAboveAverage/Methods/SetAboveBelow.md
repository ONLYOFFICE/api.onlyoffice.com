# SetAboveBelow

设置规则是针对高于还是低于平均值的值。

## 语法

```javascript
expression.SetAboveBelow(aboveBelow);
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aboveBelow | 必需 | boolean |  | 如果规则针对高于平均值的值则为 true；如果针对低于平均值的值则为 false。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置规则查找高于或低于平均值的值。

```javascript editor-xlsx
// How to switch between above average and below average conditions.

// Toggle between above and below average conditional formatting.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(condition.GetAboveBelow() ? "Above" : "Below");

condition.SetAboveBelow(false);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(condition.GetAboveBelow() ? "Above" : "Below");

```
