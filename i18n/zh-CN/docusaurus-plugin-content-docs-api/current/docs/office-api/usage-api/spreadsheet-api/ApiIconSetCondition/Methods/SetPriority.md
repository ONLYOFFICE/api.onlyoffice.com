# SetPriority

设置条件格式规则的优先级值。

继承自 [ApiFormatCondition.SetPriority](../../ApiFormatCondition/Methods/SetPriority.md)。

## 语法

```javascript
expression.SetPriority(Priority);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | 必需 | number |  | 优先级值（从 1 开始）。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为图标集格式规则分配特定的优先级顺序。

```javascript editor-xlsx
// How do I control when an icon set rule is evaluated relative to other rules in a spreadsheet?

// Reorder formatting rules so the icon set runs at the desired position in the evaluation sequence.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Ratings");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(68);
worksheet.GetRange("A4").SetValue(48);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
let dataBarCondition = formatConditions.AddDatabar();

worksheet.GetRange("B1").SetValue("Priority before: " + iconCondition.GetPriority());

iconCondition.SetPriority(3);

worksheet.GetRange("B2").SetValue("Priority after: " + iconCondition.GetPriority());
```
