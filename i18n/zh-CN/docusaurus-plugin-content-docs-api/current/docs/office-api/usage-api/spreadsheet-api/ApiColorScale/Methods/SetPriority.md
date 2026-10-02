# SetPriority

设置条件格式规则的优先级值。

继承自 [ApiFormatCondition.SetPriority](../../ApiFormatCondition/Methods/SetPriority.md)。

## 语法

```javascript
expression.SetPriority(Priority);
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | 必需 | number |  | 优先级值（从 1 开始）。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为颜色渐变规则指定计算顺序中的特定位置。

```javascript editor-xlsx
// How do I place a color scale rule at an exact rank among all formatting rules in a spreadsheet?

// Reorder a color gradient condition by giving it a precise priority number in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale1 = formatConditions.AddColorScale();
let colorScale2 = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue(colorScale1.GetPriority());

colorScale1.SetPriority(3);

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue(colorScale1.GetPriority());
```
