# FV

基于定期、固定付款和固定利率返回投资的未来值。

## 语法

```javascript
expression.FV(arg1, arg2, arg3, arg4, arg5);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每期的利率。例如，按 6% 年利率进行季度付款时使用 6%/4。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资的付款期总数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每期的付款额；在投资期限内不能更改。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 现值，或一系列未来付款现在的一次性总额。如果省略，则等于 0。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示付款时间的值：期初付款 = 1；期末付款 = 0 或省略。 |

## 返回值

number

## 示例

此示例演示如何根据定期固定付款和固定利率返回投资的未来值。

```javascript editor-xlsx
// How to get the future value of an investment.

// Use a function to get future value of an investment based on different parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FV(0.1/12, 2*12, -500, 10000));
```
