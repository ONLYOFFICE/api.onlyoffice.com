# TBILLYIELD

返回国库券的收益率。

## 语法

```javascript
expression.TBILLYIELD(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 国库券的结算日期，以序列日期数字表示。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 国库券的到期日，以序列日期数字表示。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 国库券的购买价格，按每 100 美元面值计。 |

## 返回值

number

## 示例

此示例演示如何返回国库券的收益率。

```javascript editor-xlsx
// How to return the yield for a Treasury bill.

// Use a function to calculate a Treasury bill yield.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));
```
