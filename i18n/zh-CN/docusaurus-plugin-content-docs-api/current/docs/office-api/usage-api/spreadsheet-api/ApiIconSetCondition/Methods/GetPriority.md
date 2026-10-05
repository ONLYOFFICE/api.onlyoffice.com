# GetPriority

返回条件格式规则的优先级值。

继承自 [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md)。

## 语法

```javascript
expression.GetPriority();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中读取分配给图标集格式规则的计算优先级。

```javascript editor-xlsx
// How do I find out the priority number of an icon set rule in a spreadsheet?

// Inspect the order in which an icon set rule is evaluated against other formatting rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let priority = iconCondition.GetPriority();

worksheet.GetRange("B1").SetValue("Priority: " + priority);
```
