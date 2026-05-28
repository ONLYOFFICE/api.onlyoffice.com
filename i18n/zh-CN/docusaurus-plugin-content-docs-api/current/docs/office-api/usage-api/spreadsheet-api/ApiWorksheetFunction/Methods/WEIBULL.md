# WEIBULL

返回威布尔分布。

## 语法

```javascript
expression.WEIBULL(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的值，一个非负数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 alpha 参数，一个正数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 beta 参数，一个正数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 确定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，函数返回累积分布函数。如果为 **false**，函数返回概率质量函数。 |

## 返回值

number

## 示例

计算电子表格中用于统计分析的威布尔分布。

```javascript editor-xlsx
// How do I compute the Weibull distribution for probability calculations in a spreadsheet?

// Evaluate the Weibull probability distribution with specific parameters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.WEIBULL(12, 2, 5, true);
worksheet.GetRange("B2").SetValue(result);
```
