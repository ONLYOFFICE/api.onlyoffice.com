# DVARP

基于所选数据库条目的整体总体计算方差。

## 语法

```javascript
expression.DVARP(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 构成列表或数据库的单元格区域。数据库是相关数据的列表。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 函数中使用的列。可以是用双引号括起来的列标签，也可以是表示列在列表中位置的数字。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 包含指定条件的单元格区域。该区域至少包含一个列标签，以及列标签下方至少一个用于条件的单元格。 |

## 返回值

number

## 示例

此示例演示如何根据所选数据库条目的整个总体计算方差。

```javascript editor-xlsx
// How to estimate variance form the entire population.

// Use function to calculate entire population variance.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("B1").SetValue("Month");
worksheet.GetRange("C1").SetValue("Sales");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("B2").SetValue("Jan");
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("A3").SetValue("Andrew");
worksheet.GetRange("B3").SetValue("Jan");
worksheet.GetRange("C3").SetValue(300);
worksheet.GetRange("A4").SetValue("Bob");
worksheet.GetRange("B4").SetValue("Jan");
worksheet.GetRange("C4").SetValue(250);
worksheet.GetRange("E1").SetValue("Month");
worksheet.GetRange("E2").SetValue("Jan");
worksheet.GetRange("F1").SetValue("Sales");
worksheet.GetRange("F2").SetValue(">200");
let range1 = worksheet.GetRange("A1:C4");
let range2 = worksheet.GetRange("E1:F2");
worksheet.GetRange("F4").SetValue(func.DVARP(range1, "Sales", range2));
```
