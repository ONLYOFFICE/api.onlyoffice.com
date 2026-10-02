# SetFirstPriority

将当前条件格式规则的优先级值设置为“1”，使其在工作表上的所有其他规则之前计算。

继承自 [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md)。

## 语法

```javascript
expression.SetFirstPriority();
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将颜色渐变规则移至计算顺序的顶部。

```javascript editor-xlsx
// How do I make a color scale rule take precedence over all other formatting rules in a spreadsheet?

// Promote a color gradient condition so it is always evaluated before any competing rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let topRule = formatConditions.Add("xlTop10");
let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue(colorScale.GetPriority());

colorScale.SetFirstPriority();

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue(colorScale.GetPriority());
```
