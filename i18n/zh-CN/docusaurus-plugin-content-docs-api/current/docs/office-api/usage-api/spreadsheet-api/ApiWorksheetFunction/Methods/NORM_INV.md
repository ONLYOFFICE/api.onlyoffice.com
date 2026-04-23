# NORM_INV

返回指定平均值和标准偏差的正态累积分布的逆函数。

## 语法

```javascript
expression.NORM_INV(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与正态分布对应的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的算术平均值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的标准差，一个正数。 |

## 返回值

number

## 示例

此示例演示如何返回指定平均值和标准差的正态累积分布的反函数。

```javascript editor-xlsx
// How to calculate the inverse of the normal cumulative distribution.

// Use a function to get the inverse of the normal cumulative distribution with a mean and standard deviation.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.6);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NORMSDIST(value);

worksheet.GetRange("C1").SetValue(ans);

```
