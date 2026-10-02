# GetAppliesTo

返回当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md)。

## 语法

```javascript
expression.GetAppliesTo();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在电子表格中查找图标集条件格式规则所覆盖的单元格。

```javascript editor-xlsx
// How do I check which range of cells an icon set rule is applied to in a spreadsheet?

// Confirm the exact cell range that an icon set formatting condition targets in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(80);
worksheet.GetRange("A3").SetValue(60);
worksheet.GetRange("A4").SetValue(40);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let appliesTo = iconCondition.GetAppliesTo();

worksheet.GetRange("B1").SetValue("Applies to: " + appliesTo.GetAddress());
```
