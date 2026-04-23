# YEARFRAC

返回表示开始日期和结束日期之间完整天数的年份分数。

## 语法

```javascript
expression.YEARFRAC(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示开始日期的序列日期数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示结束日期的序列日期数字。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的日计数基准类型：**0** 或省略 - 美国 (NASD) 30/360；**1** - 实际/实际；**2** - 实际/360；**3** - 实际/365；**4** - 欧洲 30/360。 |

## 返回值

number

## 示例

此示例演示如何返回表示开始日期和结束日期之间完整天数的年份分数。

```javascript editor-xlsx
// How to return the year fraction.

// Use a function to calculate a year fraction.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.YEARFRAC("12/7/1981", "11/5/2018");

worksheet.GetRange("C1").SetValue(ans);

```
