# NETWORKDAYS

返回两个日期之间的完整工作日数。

## 语法

```javascript
expression.NETWORKDAYS(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示开始日期的序列日期数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示结束日期的序列日期数字。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 要从工作日历中排除的一个或多个序列日期数字的可选区域或数组，如州假日、联邦假日和浮动假日。 |

## 返回值

number

## 示例

此示例演示如何返回两个日期之间的完整工作日数。

```javascript editor-xlsx
// How to get the number of whole workdays between two dates.

// Use a function to get number of days between two dates.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NETWORKDAYS("3/16/2018", "12/31/2018"); 

worksheet.GetRange("C1").SetValue(ans);

```
