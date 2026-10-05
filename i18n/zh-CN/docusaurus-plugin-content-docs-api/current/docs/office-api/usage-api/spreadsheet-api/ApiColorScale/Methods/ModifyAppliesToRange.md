# ModifyAppliesToRange

设置当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md)。

## 语法

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 当前条件格式规则将应用的区域。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将颜色渐变规则覆盖的单元格更改为其他区域。

```javascript editor-xlsx
// How do I reassign a color scale rule so it targets a new group of cells in a spreadsheet?

// Expand or shift the area affected by a color gradient condition without removing the rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let originalRange = worksheet.GetRange("A2:A4");

let formatConditions = originalRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Original range:");
worksheet.GetRange("C2").SetValue(colorScale.GetAppliesTo().GetAddress());

let newRange = worksheet.GetRange("A2:A6");
colorScale.ModifyAppliesToRange(newRange);

worksheet.GetRange("D1").SetValue("Modified range:");
worksheet.GetRange("D2").SetValue(colorScale.GetAppliesTo().GetAddress());
```
