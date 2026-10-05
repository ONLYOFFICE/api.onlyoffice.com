# GetPriority

返回条件格式规则的优先级值。

继承自 [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md)。

## 语法

```javascript
expression.GetPriority();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中读取前 10 项条件格式规则的优先级顺序。

```javascript editor-xlsx
// How do I find the priority assigned to a top 10 conditional formatting rule in a spreadsheet?

// Check which position a top 10 highlight rule occupies in the formatting order in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let priority = condition1.GetPriority();

worksheet.GetRange("C1").SetValue("Rule priority:");
worksheet.GetRange("C2").SetValue(priority);
```
