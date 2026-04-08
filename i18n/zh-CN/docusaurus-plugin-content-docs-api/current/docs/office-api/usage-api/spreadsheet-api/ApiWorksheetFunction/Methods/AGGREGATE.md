# AGGREGATE

返回列表或数据库中的聚合值。

## 语法

```javascript
expression.AGGREGATE(arg1, arg2, arg3, args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定要使用的函数的数值：**1** - AVERAGE、**2** - COUNT、**3** - COUNTA、**4** - MAX、**5** - MIN、**6** - PRODUCT、**7** - STDEV.S、**8** - STDEV.P、**9** - SUM、**10** - VAR.S、**11** - VAR.P、**12** - MEDIAN、**13** - MODE.SNGL、**14** - LARGE、**15** - SMALL、**16** - PERCENTILE.INC、**17** - QUARTILE.INC、**18** - PERCENTILE.EXC、**19** - QUARTILE.EXC。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定应忽略哪些值的数值：**0** 或省略 - 嵌套的 SUBTOTAL 和 AGGREGATE 函数、**1** - 隐藏行、嵌套的 SUBTOTAL 和 AGGREGATE 函数、**2** - 错误值、嵌套的 SUBTOTAL 和 AGGREGATE 函数、**3** - 隐藏行、错误值、嵌套的 SUBTOTAL 和 AGGREGATE 函数、**4** - 无、**5** - 隐藏行、**6** - 错误值、**7** - 隐藏行和错误值。 |
| arg3 | 必需 | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 将返回聚合值的第一个数值。 |
| args | 必需 | number \| [ApiRange](../../ApiRange/ApiRange.md) \| number[] |  | 最多 253 个数值或包含将返回聚合值的值的单元格区域。参数可以是数字、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何返回列表或数据库中的聚合值。

```javascript editor-xlsx
// How to get an aggregate of a numbers and display it in the worksheet.

// Get a function that gets an aggregate from a list of numbers.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.AGGREGATE(9, 4, 10, 30, 50, 5));
```
