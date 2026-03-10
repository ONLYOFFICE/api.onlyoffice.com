# PRICE

返回定期支付利息的有价证券每 $100 面值的价格。

## 语法

```javascript
expression.PRICE(arg1, arg2, arg3, arg4, arg5, arg6, arg7);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的结算日期，以序列日期数字表示。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的到期日，以序列日期数字表示。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的年票面利率。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的年收益率。 |
| arg5 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的赎回价值，按每 100 美元面值计。 |
| arg6 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每年的付息次数。可能的值为：1 表示年付、2 表示半年付、4 表示季付。 |
| arg7 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的日计数基准：**0** 或省略 - 美国 (NASD) 30/360；**1** - 实际/实际；**2** - 实际/360；**3** - 实际/365；**4** - 欧洲 30/360。 |

## 返回值

number

## 示例

此示例演示如何返回定期付息证券的每 100 美元面值价格。

```javascript editor-xlsx
// How to return the price per $100 face value.

// Use a function to return the price per $100 face value for a security.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PRICE("1/1/2017", "6/1/2019", 0.05, 0.09, 105, 2));
```
