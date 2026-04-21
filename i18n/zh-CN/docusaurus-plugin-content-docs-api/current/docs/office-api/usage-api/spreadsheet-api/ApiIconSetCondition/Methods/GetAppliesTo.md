# GetAppliesTo

返回当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.GetAppliesTo](../../ApiFormatCondition/Methods/GetAppliesTo.md)。

## 示例

获取条件格式规则应用的范围。

```javascript editor-xlsx
// How to retrieve the cell range of existing conditional formatting rules.

// Get conditional formatting rule range.

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

let appliedRange = condition1.GetAppliesTo();

worksheet.GetRange("C1").SetValue("Rule applies to:");
worksheet.GetRange("C2").SetValue(appliedRange.GetAddress());
```
