# INTRATE

返回完全投资的有价证券的利率。

## 语法

```javascript
expression.INTRATE(arg1, arg2, arg3, arg4, arg6);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的结算日期，以序列日期数字表示。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的到期日，以序列日期数字表示。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资于证券的金额。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 到期时将收到的金额。 |
| arg6 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的日计数基准：**0** 或省略 - 美国 (NASD) 30/360；**1** - 实际/实际；**2** - 实际/360；**3** - 实际/365；**4** - 欧洲 30/360。 |

## 返回值

number

## 示例

此示例演示如何返回完全投资证券的利率。

```javascript editor-xlsx
// How to calculate an interest rate for a fully invested security.

// Use a function to get a fully invested security's interest rate.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.INTRATE("1/1/2018", "11/12/2018", 1000, 1050, 2));
```
