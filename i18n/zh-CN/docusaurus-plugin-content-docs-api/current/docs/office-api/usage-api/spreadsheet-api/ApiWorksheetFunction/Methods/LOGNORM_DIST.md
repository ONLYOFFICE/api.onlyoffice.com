# LOGNORM_DIST

返回 x 的对数正态分布，其中 ln(x) 以指定参数呈正态分布。

## 语法

```javascript
expression.LOGNORM_DIST(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的值，一个正数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | ln(x) 的平均值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | ln(x) 的标准差，一个正数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 决定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，则函数返回累积分布函数。如果为 **false**，则函数返回概率密度函数。 |

## 返回值

number

## 示例

此示例演示如何返回 x 的对数正态分布，其中 ln(x) 按指定参数呈正态分布。

```javascript editor-xlsx
// How to get the lognormal distribution of x.

// Use a function to return the lognormal distribution.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let numbersArr = [4, 3.5, 1.2];

//set values in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
let xValue = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let standardDeviation = worksheet.GetRange("A3");
let cummulative = true;

//invoke LOGNORM.DIST method
let func = Api.WorksheetFunction;
let ans = func.LOGNORM_DIST(xValue, mean, standardDeviation, cummulative);

//print answer
worksheet.GetRange("C1").SetValue(ans);
```
