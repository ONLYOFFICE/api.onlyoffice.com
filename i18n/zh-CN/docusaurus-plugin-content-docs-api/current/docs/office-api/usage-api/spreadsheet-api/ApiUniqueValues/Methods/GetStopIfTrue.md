# GetStopIfTrue

返回如果此规则计算结果为 true，编辑器是否停止计算其他格式规则。

## 语法

```javascript
expression.GetStopIfTrue();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中检查唯一值规则是否阻止应用优先级较低的规则。

```javascript editor-xlsx
// How do I find out if a unique values rule stops the evaluation of the other rules in a spreadsheet?

// Read the "stop if true" flag of a unique values rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let uniqueValues = formatConditions.AddUniqueValues();
uniqueValues.SetFillColor(Api.RGB(255, 0, 0));
uniqueValues.SetStopIfTrue(true);

worksheet.GetRange("C1").SetValue("Stop if true:");
worksheet.GetRange("C2").SetValue(uniqueValues.GetStopIfTrue() ? "Yes" : "No");
```
