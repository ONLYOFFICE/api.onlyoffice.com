# GAMMA_INV

返回伽玛累积分布的逆函数：如果 p = GAMMA.DIST(x,...)，则 GAMMA.INV(p,...) = x。

## 语法

```javascript
expression.GAMMA_INV(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与伽玛分布相关的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 alpha 参数，一个正数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 beta 参数，一个正数。如果此参数等于 1，则函数返回标准伽玛分布。 |

## 返回值

number

## 示例

此示例演示如何返回伽玛累积分布的反函数：如果 p = GAMMA.DIST(x,...)，则 GAMMA.INV(p,...) = x。

```javascript editor-xlsx
// How to calculate the inverse of the gamma cumulative distribution.

// Use a function to get the inverse of the gamma cumulative distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA_INV(0.4, 9, 2);
worksheet.GetRange("B2").SetValue(ans);


```
