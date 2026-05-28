# NORMSINV

返回标准正态累积分布的逆函数（平均值为零，标准偏差为一）。

## 语法

```javascript
expression.NORMSINV(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与正态分布对应的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |

## 返回值

number

## 示例

计算电子表格中标准正态分布的逆函数。

```javascript editor-xlsx
// How do I find the inverse of a standard normal distribution in a spreadsheet?

// Get the quantile value for a given probability in a standard normal distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.25);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NORMSINV(value);

worksheet.GetRange("C1").SetValue(ans);
```
