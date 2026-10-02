# ModifyAppliesToRange

设置当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md)。

## 语法

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 当前条件格式规则将应用的区域。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中将前 10 项条件格式规则重新分配到其他单元格区域。

```javascript editor-xlsx
// How do I change which cells a top 10 formatting rule covers in a spreadsheet?

// Extend an existing highlight rule to include additional columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let originalRange = condition1.GetAppliesTo().GetAddress();
condition1.ModifyAppliesToRange(worksheet.GetRange("A2:B6"));
let newRange = condition1.GetAppliesTo().GetAddress();

worksheet.GetRange("C1").SetValue("Original range: " + originalRange);
worksheet.GetRange("C2").SetValue("New range: " + newRange);
```
