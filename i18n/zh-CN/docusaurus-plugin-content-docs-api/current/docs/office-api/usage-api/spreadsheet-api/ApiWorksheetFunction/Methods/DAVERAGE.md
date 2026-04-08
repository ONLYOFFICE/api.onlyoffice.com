# DAVERAGE

对列表或数据库中符合指定条件的记录字段（列）中的值求平均值。

## 语法

```javascript
expression.DAVERAGE(arg1, arg2, arg3);
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

此示例演示如何计算列表或数据库中与指定条件匹配的记录字段（列）中值的平均值。

```javascript editor-xlsx
// How to find an average from the column values.

// Use function to get the average of the values that match conditions specified.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("B1").SetValue("Age");
worksheet.GetRange("C1").SetValue("Sales");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("B2").SetValue(20);
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("A3").SetValue("Andrew");
worksheet.GetRange("B3").SetValue(21);
worksheet.GetRange("C3").SetValue(300);
worksheet.GetRange("E1").SetValue("Sales");
worksheet.GetRange("E2").SetValue(">200");
let range1 = worksheet.GetRange("A1:C3");
let range2 = worksheet.GetRange("E1:E2");
worksheet.GetRange("E4").SetValue(func.DAVERAGE(range1, "Sales", range2));
```
