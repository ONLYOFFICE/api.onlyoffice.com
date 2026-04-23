# EOMONTH

返回指定月数之前或之后月份最后一天的序列号。

## 语法

```javascript
expression.EOMONTH(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示开始日期的序列日期数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 开始日期之前或之后的月数。 |

## 返回值

number

## 示例

此示例演示如何返回指定月数之前或之后某月最后一天的序列号。

```javascript editor-xlsx
// How to get a date of the last day of the month before or after specified months.

// Use function to get the serial number of the last day of the month before or after the specified number of months.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.EOMONTH("3/16/2018", 10); 

worksheet.GetRange("C1").SetValue(ans);

```
