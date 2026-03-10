# DPRODUCT

将数据库中符合指定条件的记录字段（列）中的值相乘。

## 语法

```javascript
expression.DPRODUCT(arg1, arg2, arg3);
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

此示例演示如何将数据库中与指定条件匹配的记录字段（列）中的值相乘。

```javascript editor-xlsx
// How to multiply the values under condition.

// Use function to multiply the values from columns if they satisfy a condition.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Identifier");
worksheet.GetRange("C1").SetValue("Value");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("B2").SetValue("Price");
worksheet.GetRange("C2").SetValue(25);
worksheet.GetRange("A3").SetValue("Apple");
worksheet.GetRange("B3").SetValue("Quantity");
worksheet.GetRange("C3").SetValue(100);
worksheet.GetRange("E1").SetValue("Product");
worksheet.GetRange("E2").SetValue("Apple");
let range1 = worksheet.GetRange("A1:C3");
let range2 = worksheet.GetRange("E1:F2");
worksheet.GetRange("E4").SetValue(func.DPRODUCT(range1, "Value", range2));
```
