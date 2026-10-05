# GetAppliesTo

返回当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md)。

## 语法

```javascript
expression.GetAppliesTo();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在电子表格中查找条形格式规则所应用的单元格。

```javascript editor-xlsx
// How do I check what range is covered by a data bar formatting rule in a spreadsheet?

// Identify the exact cell range targeted by a bar visual rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let appliesTo = dataBar.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Data bar applies to:");
worksheet.GetRange("C2").SetValue(appliesTo.GetAddress());
```
