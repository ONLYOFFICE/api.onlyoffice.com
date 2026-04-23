# SetFirstPriority

将当前条件格式规则的优先级值设置为「1」，使其在工作表上的所有其他规则之前计算。

## 语法

```javascript
expression.SetFirstPriority();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例将条件格式规则设置为最高优先级。

```javascript editor-xlsx
// How to change the priority order of conditional formatting rules.

// Set conditional formatting rule as first priority.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let condition2 = formatConditions.Add("xlCellValue", "xlLess", "150");
condition2.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue("Rule 1: " + condition1.Priority);
worksheet.GetRange("C3").SetValue("Rule 2: " + condition2.Priority);

condition2.SetFirstPriority();

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue("Rule 1: " + condition1.Priority);
worksheet.GetRange("D3").SetValue("Rule 2: " + condition2.Priority);

```
