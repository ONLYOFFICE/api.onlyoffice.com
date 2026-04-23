# ModifyAppliesToRange

设置当前条件格式规则应用的单元格区域。

## 语法

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 当前条件格式规则将应用的区域。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例修改条件格式规则应用的区域。

```javascript editor-xlsx
// How to change the cell range for existing conditional formatting rules.

// Modify conditional formatting rule range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);
worksheet.GetRange("A7").SetValue(180);
worksheet.GetRange("A8").SetValue(220);

let dataRange = worksheet.GetRange("A2:A8");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original range:");
worksheet.GetRange("C2").SetValue(condition1.GetAppliesTo().GetAddress());

let newRange = worksheet.GetRange("A2:A5");
condition1.ModifyAppliesToRange(newRange);

worksheet.GetRange("D1").SetValue("Modified range:");
worksheet.GetRange("D2").SetValue(condition1.GetAppliesTo().GetAddress());

```
