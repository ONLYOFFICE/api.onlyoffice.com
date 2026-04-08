# FDIST

返回两个数据集的（右尾）F 概率分布（多样性程度）。

## 语法

```javascript
expression.FDIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算函数的值，一个非负数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分子自由度，一个介于 1 和 10^10 之间的数字，不包括 10^10。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分母自由度，一个介于 1 和 10^10 之间的数字，不包括 10^10。 |

## 返回值

number

## 示例

此示例演示如何返回两个数据集的（右尾）F 概率分布（离散度）。

```javascript editor-xlsx
// How to get an F probability distribution of two datasets.

// Use function to get F probability distribution (degree of diversity).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FDIST(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);
```
