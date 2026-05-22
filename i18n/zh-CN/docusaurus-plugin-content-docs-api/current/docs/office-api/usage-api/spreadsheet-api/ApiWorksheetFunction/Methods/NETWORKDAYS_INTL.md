# NETWORKDAYS_INTL

返回两个日期之间的完整工作日数，可自定义周末参数。

## 语法

```javascript
expression.NETWORKDAYS_INTL(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示开始日期的序列日期数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示结束日期的序列日期数字。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | 指定周末何时出现的数字或字符串。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 要从工作日历中排除的一个或多个序列日期数字的可选区域或数组，如州假日、联邦假日和浮动假日。 |

## 返回值

number

## 示例

使用自定义周末规则计算电子表格中的工作日数。

```javascript editor-xlsx
// Calculate business days using a specific weekend pattern in a spreadsheet.

// Exclude custom holidays and weekends from workday calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NETWORKDAYS_INTL("8/1/2017", "9/1/2017", "0000011", "8/16/2017"));
```
