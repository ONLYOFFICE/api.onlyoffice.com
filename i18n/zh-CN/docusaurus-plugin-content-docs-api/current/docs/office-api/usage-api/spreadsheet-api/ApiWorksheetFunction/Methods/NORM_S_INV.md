# NORM_S_INV

返回标准正态累积分布的逆函数（平均值为零，标准偏差为一）。

## 语法

```javascript
expression.NORM_S_INV(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与正态分布对应的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |

## 返回值

number

## 示例

此示例演示如何返回标准正态累积分布的反函数（平均值为零，标准差为一）。

```javascript editor-xlsx
// How to calculate the inverse of the standard normal cumulative distribution.

// Use a function to get the inverse of the standard normal cumulative distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORM_S_INV(0.908));
```
