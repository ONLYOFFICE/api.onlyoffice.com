# WORKDAY

返回指定工作日数之前或之后日期的序列号。

## 语法

```javascript
expression.WORKDAY(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示开始日期的序列日期数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 开始日期之前或之后的非周末和非假日天数。正数表示未来日期；负数表示过去日期。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | 要从工作日历中排除的一个或多个序列日期数字的可选区域或数组，如州假日、联邦假日和浮动假日。 |

## 返回值

number

## 示例

此示例演示如何返回指定工作日数之前或之后的日期的序列号。

```javascript editor-xlsx
// How to return the serial number of the date adding some workdays.

// Use a function to calculate the serial number of the date.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.WORKDAY("12/7/1981", 56); 

worksheet.GetRange("C1").SetValue(ans);

```
