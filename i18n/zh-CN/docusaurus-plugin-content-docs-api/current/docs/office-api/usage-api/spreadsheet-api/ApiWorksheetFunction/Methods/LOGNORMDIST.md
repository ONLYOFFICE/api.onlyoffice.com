# LOGNORMDIST

返回 x 的累积对数正态分布，其中 ln(x) 以指定参数呈正态分布。

## 语法

```javascript
expression.LOGNORMDIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的值，一个正数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | ln(x) 的平均值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | ln(x) 的标准差，一个正数。 |

## 返回值

number

## 示例

此示例演示如何返回 x 的累积对数正态分布，其中 ln(x) 按指定参数呈正态分布。

```javascript editor-xlsx
// How to get the cumulative lognormal distribution of x.

// Use a function to return the cumulative lognormal distribution.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let numbersArr = [4, 7, 40];

//set values in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
let xValue = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let standardDeviation = worksheet.GetRange("A3");

//invoke LOGNORMDIST method
let func = Api.WorksheetFunction;
let ans = func.LOGNORMDIST(xValue, mean, standardDeviation);

//print answer
worksheet.GetRange("C1").SetValue(ans);

```
