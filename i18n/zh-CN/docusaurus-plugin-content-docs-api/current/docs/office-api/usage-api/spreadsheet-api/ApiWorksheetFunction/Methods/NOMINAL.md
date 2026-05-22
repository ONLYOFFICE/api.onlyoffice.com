# NOMINAL

返回年名义利率。

## 语法

```javascript
expression.NOMINAL(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 证券的有效利率。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每年的复利期数。 |

## 返回值

number

## 示例

计算电子表格中的年名义利率。

```javascript editor-xlsx
// Find the stated interest rate from effective rate and compounding periods in a spreadsheet.

// Convert compounded interest into annual percentage rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NOMINAL(0.7, 4));
```
