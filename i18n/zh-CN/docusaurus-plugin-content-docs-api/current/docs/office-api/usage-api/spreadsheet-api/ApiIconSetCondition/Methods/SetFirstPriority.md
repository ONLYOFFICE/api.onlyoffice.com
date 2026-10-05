# SetFirstPriority

将当前条件格式规则的优先级值设置为“1”，使其在工作表上的所有其他规则之前计算。

继承自 [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md)。

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

在电子表格中将图标集格式规则提升至计算顺序的顶部。

```javascript editor-xlsx
// How do I make an icon set rule take precedence over all other formatting rules in a spreadsheet?

// Ensure an icon set rule is processed before any other conditional formatting rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(65);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
let dataBarCondition = formatConditions.AddDatabar();

worksheet.GetRange("B1").SetValue("Priority before: " + iconCondition.GetPriority());

iconCondition.SetFirstPriority();

worksheet.GetRange("B2").SetValue("Priority after: " + iconCondition.GetPriority());
```
