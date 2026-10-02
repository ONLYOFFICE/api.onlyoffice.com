# SetLastPriority

设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。

继承自 [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md)。

## 语法

```javascript
expression.SetLastPriority();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将数据条格式规则移至计算顺序的底部。

```javascript editor-xlsx
// How do I make a data bar rule evaluate after all other formatting rules in a spreadsheet?

// Defer a data bar rule so it only applies when no higher-priority rule already matches in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar1.SetLastPriority();

let priority = dataBar1.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);
```
