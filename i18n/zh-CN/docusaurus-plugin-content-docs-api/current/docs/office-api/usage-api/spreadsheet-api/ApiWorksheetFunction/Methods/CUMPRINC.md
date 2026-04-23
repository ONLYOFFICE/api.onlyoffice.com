# CUMPRINC

返回两个期间之间支付的贷款累积本金。

## 语法

```javascript
expression.CUMPRINC(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 投资的利率。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 付款期总数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 付款的现值。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 计算中包含的第一期。 |
| arg5 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 计算中包含的最后一期。 |
| arg6 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 付款时间。 |

## 返回值

number

## 示例

此示例演示如何获取两个期间之间贷款支付的累计本金。

```javascript editor-xlsx
// How to return the cumulative principal paid on a loan between two periods.

// Use function to get the cumulative principal paid on a loan between two periods.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CUMPRINC(0.1/12, 2*12, 2000, 1, 24, 0));
```
