# GetPTCondition

返回数据透视表条件对象。

继承自 [ApiFormatCondition.GetPTCondition](../../ApiFormatCondition/Methods/GetPTCondition.md)。

## 示例

检查电子表格中的条件格式规则是否链接到数据透视表范围。

```javascript editor-xlsx
// How do I find out if a conditional formatting rule applies within a pivot table context in a spreadsheet?

// Determine the pivot table association of a formatting condition to understand its scope in a spreadsheet.

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

let ptCondition = condition1.GetPTCondition();

worksheet.GetRange("C1").SetValue("PT Condition:");
worksheet.GetRange("C2").SetValue(ptCondition ? "Found" : "None");
```
