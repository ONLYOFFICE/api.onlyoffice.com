# HARMEAN

返回正数数据集的调和平均值：倒数的算术平均值的倒数。

## 语法

```javascript
expression.HARMEAN(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| number[] \| [ApiName](../../ApiName/ApiName.md) |  | 最多 255 个将计算调和平均值的数值。参数可以是数字、名称、区域或数字数组。 |

## 返回值

number

## 示例

此示例演示如何返回正数数据集的调和平均值：倒数的算术平均值的倒数。

```javascript editor-xlsx
// How to calculate the harmonic mean of a data set of positive numbers.

// Use a function to calculate harmonic mean.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.HARMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);


```
