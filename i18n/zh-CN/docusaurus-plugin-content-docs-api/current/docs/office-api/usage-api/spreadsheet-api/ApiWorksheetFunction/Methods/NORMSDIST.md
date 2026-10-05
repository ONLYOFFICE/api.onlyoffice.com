# NORMSDIST

返回标准正态累积分布（平均值为零，标准偏差为一）。

## 语法

```javascript
expression.NORMSDIST(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回分布的值。 |

## 返回值

number

## 示例

计算电子表格中标准正态分布的概率。

```javascript editor-xlsx
// Find cumulative probability using the standard normal curve in a spreadsheet.

// Determine statistical likelihood for standardized values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(0.6);
let value = worksheet.GetRange("A1").GetValue();
let func = Api.WorksheetFunction;
let ans = func.NORMSDIST(value);
worksheet.GetRange("C1").SetValue(ans);
```
