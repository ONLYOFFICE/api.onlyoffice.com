# GetAppliesTo

返回当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md)。

## 语法

```javascript
expression.GetAppliesTo();
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在电子表格中识别色阶格式规则所覆盖的单元格区域。

```javascript editor-xlsx
// How do I find out which cells a color scale rule is applied to in a spreadsheet?

// Read back the target range of an active color scale rule and display its address in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

let appliedRange = colorScale.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Color scale applies to:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
```
