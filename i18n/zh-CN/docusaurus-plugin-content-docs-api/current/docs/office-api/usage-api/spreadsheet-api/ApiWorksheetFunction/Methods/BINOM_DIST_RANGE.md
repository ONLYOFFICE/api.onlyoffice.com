# BINOM_DIST_RANGE

使用二项分布返回试验结果的概率。

## 语法

```javascript
expression.BINOM_DIST_RANGE(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 独立试验的次数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每次试验成功的概率。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算概率的试验中的最小成功次数，数值大于或等于 0。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算概率的试验中的最大成功次数，数值大于最小成功次数且小于或等于试验次数。 |

## 返回值

number

## 示例

此示例演示如何使用二项分布返回试验结果的概率。

```javascript editor-xlsx
// How to get a probability of a trial result.

// Use function to get a probability of a trial result using binomial distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOM_DIST_RANGE(60, 0.75, 45, 50));
```
