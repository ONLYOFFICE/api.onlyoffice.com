# ISPMT

返回投资在特定期间支付的利息。

## 语法

```javascript
expression.ISPMT(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每期的利率。例如，按 6% 年利率进行季度付款时使用 6%/4。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回利息的期间。必须在 1 到总付款期数的范围内。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资的付款期总数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 现值，或一系列未来付款现在的一次性总额。 |

## 返回值

number

## 示例

此示例演示如何返回投资在特定期间支付的利息。

```javascript editor-xlsx
// How to get the investment interest paid during a specific period.

// Use a function to get an interest paid during a specific period.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISPMT(0.1/12, 1, 2*12, 2000));
```
