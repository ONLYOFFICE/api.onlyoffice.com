# ACCRINT

返回定期支付利息的有价证券的应计利息。

## 语法

```javascript
expression.ACCRINT(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的发行日期，以序列日期数字表示。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 首次支付利息的日期，以序列日期数字表示。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的结算日期，以序列日期数字表示。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的年票面利率。 |
| arg5 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的面值。 |
| arg6 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每年的付息次数。可能的值为：1 表示年付、2 表示半年付、4 表示季付。 |
| arg7 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的日计数基准：**0** 或省略 - 美国 (NASD) 30/360；**1** - 实际/实际；**2** - 实际/360；**3** - 实际/365；**4** - 欧洲 30/360。 |
| arg8 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 逻辑值：**true** (1) 或省略返回从发行日到结算日的应计利息。**false** (0) 返回从首次付息日到结算日的应计利息。 |

## 返回值

number

## 示例

此示例演示如何返回定期付息证券的应计利息。

```javascript editor-xlsx
// How to get an accrued interest for a security that pays periodic interest.

// Get a function that gets accrued interest for a security.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACCRINT("1/1/2018", "6/25/2018", "10/15/2018", "3.50%", 1000, 2));
```
