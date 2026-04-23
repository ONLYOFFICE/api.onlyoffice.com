# POISSON_DIST

返回泊松分布。

## 语法

```javascript
expression.POISSON_DIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 事件数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 期望的数值，一个正数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 决定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，则函数返回累积泊松概率。如果为 **false**，则函数返回泊松概率质量函数。 |

## 返回值

number

## 示例

此示例演示如何计算泊松分布。

```javascript editor-xlsx
// How to return the Poisson distribution.

// Use a function to calculate the Poisson distribution.

const worksheet = Api.GetActiveSheet();

//method params
let x = 9;
let mean = 12;
let cumulative = false;

let func = Api.WorksheetFunction;
let ans = func.POISSON_DIST(x, mean, cumulative);

worksheet.GetRange("C1").SetValue(ans);

```
