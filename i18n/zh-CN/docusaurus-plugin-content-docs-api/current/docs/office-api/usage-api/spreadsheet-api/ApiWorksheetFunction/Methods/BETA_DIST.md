# BETA_DIST

返回贝塔概率分布函数。

## 语法

```javascript
expression.BETA_DIST(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的介于 A 和 B 之间的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 alpha 参数，必须大于 0。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 beta 参数，必须大于 0。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 指定是累积分布函数 (**true**) 还是概率密度函数 (**false**)。 |
| arg5 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | x 区间的可选下界 (A)。如果省略，则等于 0。 |
| arg6 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | x 区间的可选上界 (B)。如果省略，则等于 1。 |

## 返回值

number

## 示例

此示例演示如何返回累积 beta 概率密度函数。

```javascript editor-xlsx
// How to get a result from cumulative beta probability density function.

// Use function to get the cumulative beta probability density function.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BETA_DIST(0.4, 4, 5, false);
worksheet.GetRange("B2").SetValue(ans);
```
