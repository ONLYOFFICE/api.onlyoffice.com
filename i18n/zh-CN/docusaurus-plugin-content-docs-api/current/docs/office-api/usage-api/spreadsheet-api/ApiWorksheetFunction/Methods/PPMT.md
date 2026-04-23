# PPMT

基于定期、固定付款和固定利率，返回给定投资的本金支付额。

## 语法

```javascript
expression.PPMT(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每期的利率。例如，按 6% 年利率进行季度付款时使用 6%/4。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回本金付款的期间。必须在 1 到总付款期数的范围内。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资的付款期总数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 现值：一系列未来付款现在的总金额。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 未来值，或最后一次付款后将达到的现金余额。 |
| arg6 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 逻辑值：期初付款 = 1；期末付款 = 0 或省略。 |

## 返回值

number

## 示例

此示例演示如何根据定期固定付款和固定利率返回给定投资的本金付款。

```javascript editor-xlsx
// How to return the payment on the principal for a given investment.

// Use a function to calculate the payment on the principal for a given investment based on parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PPMT(0.1/12, 1, 2*12, 2000, 0));
```
