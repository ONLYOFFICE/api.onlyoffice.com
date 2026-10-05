# GetPriority

返回条件格式规则的优先级值。

继承自 [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md)。

## 语法

```javascript
expression.GetPriority();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在电子表格中读取数据条规则在其他格式规则中的计算顺序。

```javascript editor-xlsx
// How do I check which priority a data bar rule has when multiple formatting rules overlap in a spreadsheet?

// Confirm the position at which a data bar rule is evaluated relative to other rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let priority = dataBar.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);
```
