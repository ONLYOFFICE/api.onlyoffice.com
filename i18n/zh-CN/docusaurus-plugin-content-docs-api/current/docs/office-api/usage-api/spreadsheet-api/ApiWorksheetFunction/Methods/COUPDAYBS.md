# COUPDAYBS

返回从付息期开始到结算日的天数。

## 语法

```javascript
expression.COUPDAYBS(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的结算日期，以序列日期数字表示。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的到期日，以序列日期数字表示。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每年的付息次数。可能的值为：1 表示年付、2 表示半年付、4 表示季付。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的日计数基准：**0** 或省略 - 美国 (NASD) 30/360；**1** - 实际/实际；**2** - 实际/360；**3** - 实际/365；**4** - 欧洲 30/360。 |

## 返回值

number

## 示例

此示例演示如何返回从票息期开始到结算日的天数。

```javascript editor-xlsx
// How to find the number of days from the beginning of the coupon period to the settlement date.

// Use function to get days count from the beginning of the coupon period to the settlement date.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPDAYBS("1/10/2018", "6/15/2019", 4, 1));
```
