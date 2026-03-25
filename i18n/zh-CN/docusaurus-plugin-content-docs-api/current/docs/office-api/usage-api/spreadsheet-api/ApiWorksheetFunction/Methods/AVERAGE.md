# AVERAGE

返回指定参数的平均值（算术平均值）。

## 语法

```javascript
expression.AVERAGE(args);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| number[] |  | 最多 255 个数值，将返回这些数值的平均值。第一个参数是必需的，后续参数是可选的。参数可以是数字、名称或数字数组。 |

## 返回值

number

## 示例

此示例演示如何返回数据点与其平均值之间绝对偏差的平均值。

```javascript editor-xlsx
// How to get an average of the absolute deviations.

// Use function to get the average of the absolute deviations of data points from their mean.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGE(123, 197, 46, 345, 67, 456);
worksheet.GetRange("B2").SetValue(ans);
```
