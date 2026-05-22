# SetScopeType

设置条件格式规则的作用域类型。

继承自 [ApiFormatCondition.SetScopeType](../../ApiFormatCondition/Methods/SetScopeType.md)。

## 示例

定义格式规则应应用于电子表格中表格的哪个部分。

```javascript editor-xlsx
// How do I limit a conditional formatting rule to only certain columns or data fields in a spreadsheet?

// Narrow or expand the reach of a highlight rule across table sections in a spreadsheet.

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

worksheet.GetRange("C1").SetValue("Original scope:");
worksheet.GetRange("C2").SetValue(condition1.GetScopeType());

condition1.SetScopeType("xlDataFieldScope");

worksheet.GetRange("C4").SetValue("New scope:");
worksheet.GetRange("C5").SetValue(condition1.GetScopeType());
```
