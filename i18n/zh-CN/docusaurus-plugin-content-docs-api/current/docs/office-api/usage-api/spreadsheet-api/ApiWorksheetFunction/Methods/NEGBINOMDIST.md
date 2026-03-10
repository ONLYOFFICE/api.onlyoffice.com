# NEGBINOMDIST

返回负二项分布，即在最后一次成功之前有指定次数失败的概率，以及指定的成功概率。

## 语法

```javascript
expression.NEGBINOMDIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 失败次数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 成功次数阈值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 成功的概率；一个介于 0 和 1 之间的数字。 |

## 返回值

number

## 示例

此示例演示如何返回负二项分布，即在最后一次成功之前出现指定失败次数的概率，成功概率为指定值。

```javascript editor-xlsx
// How to return the negative binomial distribution.

// Use a function to get the probability of the specified number of failures before the last success (negative binomial distribution).

const worksheet = Api.GetActiveSheet();

let valueArr = [6, 32, 0.7];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let numberF = worksheet.GetRange("A1").GetValue();
let numberS = worksheet.GetRange("A2").GetValue();
let probabilityS = worksheet.GetRange("A3").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NEGBINOMDIST(numberF, numberS, probabilityS);

worksheet.GetRange("C1").SetValue(ans);
```
