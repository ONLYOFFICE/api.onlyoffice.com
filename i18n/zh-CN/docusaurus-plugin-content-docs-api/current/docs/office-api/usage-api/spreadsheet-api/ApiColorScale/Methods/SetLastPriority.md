# SetLastPriority

设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。

继承自 [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md)。

## 语法

```javascript
expression.SetLastPriority();
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将颜色渐变规则移至计算顺序的底部。

```javascript editor-xlsx
// How do I make a color scale rule yield to all other formatting rules in a spreadsheet?

// Demote a color gradient condition so it is always evaluated after every other competing rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();
let topRule = formatConditions.Add("xlTop10");

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue(colorScale.GetPriority());

colorScale.SetLastPriority();

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue(colorScale.GetPriority());
```
