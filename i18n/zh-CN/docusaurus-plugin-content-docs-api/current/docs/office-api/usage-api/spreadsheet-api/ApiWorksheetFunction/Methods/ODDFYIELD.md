# ODDFYIELD

返回首期不规则的有价证券的收益率。

## 语法

```javascript
expression.ODDFYIELD(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的结算日期，以序列日期数字表示。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的到期日，以序列日期数字表示。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的发行日期，以序列日期数字表示。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的首次付息日，以序列日期数字表示。 |
| arg5 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的利率。 |
| arg6 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的购买价格，按每 100 美元面值计。 |
| arg7 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的赎回价值，按每 100 美元面值计。 |
| arg8 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每年的付息次数。可能的值为：1 表示年付、2 表示半年付、4 表示季付。 |
| arg9 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的日计数基准：**0** 或省略 - 美国 (NASD) 30/360；**1** - 实际/实际；**2** - 实际/360；**3** - 实际/365；**4** - 欧洲 30/360。 |

## 返回值

number

## 示例

此示例演示如何返回首期不规则证券的收益率。

```javascript editor-xlsx
// How to get the yield of a security.

// Use a function to return a security yield.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODDFYIELD("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.06, 90, 100, 2));
```
