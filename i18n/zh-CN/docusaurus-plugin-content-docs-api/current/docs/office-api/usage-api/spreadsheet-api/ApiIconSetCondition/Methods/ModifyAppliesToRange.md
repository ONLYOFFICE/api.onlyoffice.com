# ModifyAppliesToRange

设置当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md)。

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

在电子表格中更改图标集格式规则所覆盖的单元格区域。

```javascript editor-xlsx
// How do I reassign an icon set formatting rule to a different range of cells in a spreadsheet?

// Expand or shift the cells an icon set rule applies to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("B3").SetValue(250);

let range = worksheet.GetRange("A2:A3");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
iconCondition.SetIconSet("xl3Arrows");

let newRange = worksheet.GetRange("A2:B3");
iconCondition.ModifyAppliesToRange(newRange);

worksheet.GetRange("C1").SetValue("Icon set applied to A2:B3");
```
