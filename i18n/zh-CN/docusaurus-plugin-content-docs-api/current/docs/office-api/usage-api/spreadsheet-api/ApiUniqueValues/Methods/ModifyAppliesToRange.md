# ModifyAppliesToRange

设置当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md)。

## 语法

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 当前条件格式规则将应用的区域。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中更改唯一值格式规则所覆盖的单元格区域。

```javascript editor-xlsx
// How do I update which cells a unique values formatting rule applies to in a spreadsheet?

// Expand or narrow the area a unique values rule highlights in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let originalRange = uniqueValuesCondition.GetAppliesTo();
let originalAddress = originalRange.GetAddress();

let newRange = worksheet.GetRange("A2:B5");
uniqueValuesCondition.ModifyAppliesToRange(newRange);

let modifiedRange = uniqueValuesCondition.GetAppliesTo();
let modifiedAddress = modifiedRange.GetAddress();

worksheet.GetRange("D1").SetValue("Original range:");
worksheet.GetRange("D2").SetValue(originalAddress);
worksheet.GetRange("D3").SetValue("Modified range:");
worksheet.GetRange("D4").SetValue(modifiedAddress);
```
