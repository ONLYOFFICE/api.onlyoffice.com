# NEGBINOM_DIST

返回负二项分布，即在最后一次成功之前有指定次数失败的概率，以及指定的成功概率。

## 语法

```javascript
expression.NEGBINOM_DIST(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 失败次数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 成功次数阈值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 成功的概率；一个介于 0 和 1 之间的数字。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 决定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，则函数返回累积分布函数。如果为 **false**，则函数返回概率密度函数。 |

## 返回值

number

## 示例

此示例演示如何返回负二项分布，即在最后一次成功之前出现指定失败次数的概率，成功概率为指定值。

```javascript editor-xlsx
// How to return the negative binomial distribution.

// Use a function to get the probability of the specified number of failures before the last success (negative binomial distribution).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NEGBINOM_DIST(6, 32, 0.7, true));
```
