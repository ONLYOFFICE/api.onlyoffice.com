# SetFirstPriority

将当前条件格式规则的优先级值设置为“1”，使其在工作表上的所有其他规则之前计算。

继承自 [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md)。

## 语法

```javascript
expression.SetFirstPriority();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将数据条格式规则移至计算顺序的顶部。

```javascript editor-xlsx
// How do I make a data bar rule take precedence over all other formatting rules in a spreadsheet?

// Ensure a data bar rule is applied before any conflicting rules are considered in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar2.SetFirstPriority();

let priority = dataBar2.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);
```
