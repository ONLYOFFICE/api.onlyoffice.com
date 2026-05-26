# LOGNORM_INV

返回 x 的对数正态累积分布函数的逆函数，其中 ln(x) 以指定参数呈正态分布。

## 语法

```javascript
expression.LOGNORM_INV(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与对数正态分布相关的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | ln(x) 的平均值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | ln(x) 的标准差，一个正数。 |

## 返回值

number

## 示例

查找电子表格中对数正态分布中给定累积概率的值。

```javascript editor-xlsx
// How do I determine the percentile value for a lognormal distribution in a spreadsheet?

// Look up the inverse of cumulative lognormal probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOGNORM_INV(0.3, 2, 0.2));
```
