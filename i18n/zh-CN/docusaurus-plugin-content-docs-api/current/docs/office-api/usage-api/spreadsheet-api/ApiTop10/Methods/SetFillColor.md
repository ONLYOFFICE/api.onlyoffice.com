# SetFillColor

使用先前创建的颜色对象设置格式条件的背景颜色。
当先前创建的颜色对象为 null 时设置为「无填充」。

Inherited from [ApiFormatCondition.SetFillColor](../../ApiFormatCondition/Methods/SetFillColor.md).

## 示例

此示例设置条件格式规则的背景颜色。

```javascript editor-xlsx
// How to apply background colors to conditional formatting rules.

// Set conditional formatting rule background color.

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

worksheet.GetRange("C1").SetValue("Original color:");
worksheet.GetRange("C2").SetValue("No Fill");

let fillColor = Api.CreateColorFromRGB(255, 255, 0);
condition1.SetFillColor(fillColor);

worksheet.GetRange("C4").SetValue("New color:");
worksheet.GetRange("C5").SetValue("Yellow background");
```

