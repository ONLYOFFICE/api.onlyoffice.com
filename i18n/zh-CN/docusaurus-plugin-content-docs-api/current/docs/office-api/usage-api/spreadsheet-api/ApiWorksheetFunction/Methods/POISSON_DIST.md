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
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 确定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，函数返回累积泊松概率。如果为 **false**，函数返回泊松概率质量函数。 |

## 返回值

number

## 示例

使用泊松统计分布在电子表格中计算事件概率。

```javascript editor-xlsx
// How do I find the probability of events occurring at a given rate in a spreadsheet?

// Determine cumulative or individual event probabilities from a Poisson distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let x = 9;
let mean = 12;
let cumulative = false;

let func = Api.WorksheetFunction;
let ans = func.POISSON_DIST(x, mean, cumulative);

worksheet.GetRange("C1").SetValue(ans);
```
