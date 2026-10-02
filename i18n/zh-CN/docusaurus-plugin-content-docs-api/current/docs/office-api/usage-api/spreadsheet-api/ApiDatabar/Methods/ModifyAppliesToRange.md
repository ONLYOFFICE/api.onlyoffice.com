# ModifyAppliesToRange

设置当前条件格式规则应用的单元格区域。

继承自 [ApiFormatCondition.ModifyAppliesToRange](../../ApiFormatCondition/Methods/ModifyAppliesToRange.md)。

## 语法

```javascript
expression.ModifyAppliesToRange(Range);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 当前条件格式规则将应用的区域。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中扩展或更改数据条格式规则所覆盖的单元格。

```javascript editor-xlsx
// How do I move a data bar rule to a different or larger group of cells in a spreadsheet?

// Reassign an existing data bar rule so it targets a new range of cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Original Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

worksheet.GetRange("B1").SetValue("Extended Data");
worksheet.GetRange("B2").SetValue(300);
worksheet.GetRange("B3").SetValue(400);

let originalRange = worksheet.GetRange("A2:A3");
let formatConditions = originalRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let newRange = worksheet.GetRange("A2:B3");
dataBar.ModifyAppliesToRange(newRange);

worksheet.GetRange("D1").SetValue("Data bar now applies to A2:B3");
```
