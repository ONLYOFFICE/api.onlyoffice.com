# RATE

返回贷款或投资的每期利率。例如，使用 6%/4 表示年利率 6% 的季度付款。

## 语法

```javascript
expression.RATE(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 贷款或投资的总付款期数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每期的付款额，在贷款或投资期限内不能更改。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 现值：一系列未来付款现在的总金额。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 未来值，或最后一次付款后将达到的现金余额。如果省略，则等于 0。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 逻辑值：期初付款 = 1；期末付款 = 0 或省略。 |
| arg6 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 对利率的估计值。如果省略，函数将假定估计值为 0.1（10%）。 |

## 返回值

number

## 示例

此示例演示如何返回贷款或投资每期的利率。例如，按 6% 年利率进行季度付款时使用 6%/4。

```javascript editor-xlsx
// How to estimate the interest rate per period for a loan or an investment.

// Use a function to get the loan/investment interest rate per period.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RATE(2*12, -500, 10000, 0));
```
