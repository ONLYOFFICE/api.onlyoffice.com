# CHIDIST

返回卡方分布的右尾概率。

## 语法

```javascript
expression.CHIDIST(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算分布的值，一个非负数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 自由度数，一个介于 1 和 10^10 之间的数字，不包括 10^10。 |

## 返回值

number

## 示例

此示例演示如何返回卡方分布的右尾概率。

```javascript editor-xlsx
// How to return the right-tailed probability of the chi-squared distribution.

// Use function to return the right-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let avg = func.CHIDIST(12, 10);
worksheet.GetRange("B2").SetValue(avg);
```
