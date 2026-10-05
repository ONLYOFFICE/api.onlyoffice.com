# SetLastPriority

设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。

继承自 [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md)。

## 语法

```javascript
expression.SetLastPriority();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将图标集格式规则移至最低优先级。

```javascript editor-xlsx
// How do I make an icon set rule evaluate last among all formatting rules in a spreadsheet?

// Push an icon set rule to the bottom of the priority order so other rules take precedence.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(50);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
let colorScaleCondition = formatConditions.AddColorScale();

worksheet.GetRange("B1").SetValue("Priority before: " + iconCondition.GetPriority());

iconCondition.SetLastPriority();

worksheet.GetRange("B2").SetValue("Priority after: " + iconCondition.GetPriority());
```
