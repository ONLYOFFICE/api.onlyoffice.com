# BINOM_INV

返回累积二项分布大于或等于条件值的最小值。

## 语法

```javascript
expression.BINOM_INV(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 伯努利试验的次数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每次试验成功的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 标准值，一个介于 0 和 1 之间（含 0 和 1）的数字。 |

## 返回值

number

## 示例

此示例演示如何返回累积二项分布大于或等于标准值的最小值。

```javascript editor-xlsx
// How to get a smallest value for which the cumulative binomial distribution >= criterion value.

// Use function to get a minimum value so that the cumulative binomial distribution >= criterion value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BINOM_INV(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);
```
