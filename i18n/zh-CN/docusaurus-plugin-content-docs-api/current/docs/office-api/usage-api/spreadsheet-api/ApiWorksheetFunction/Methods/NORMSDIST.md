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

此示例演示如何返回标准正态累积分布（平均值为零，标准差为一）。

```javascript editor-xlsx
// How to calculate the standard normal cumulative distribution.

// Use a function to get the standard normal cumulative distribution.

const worksheet = Api.GetActiveSheet();
let valueArr = [0.34, 7, 3];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let probability = worksheet.GetRange("A1").GetValue();
let mean = worksheet.GetRange("A2").GetValue();
let standardDeviation = worksheet.GetRange("A3").GetValue();

let func = Api.WorksheetFunction;
let inv = func.NORM_INV(probability, mean, standardDeviation);
worksheet.GetRange("C1").SetValue(inv);
```
