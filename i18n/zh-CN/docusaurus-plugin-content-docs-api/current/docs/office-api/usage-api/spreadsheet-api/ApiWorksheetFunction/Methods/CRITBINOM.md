# CRITBINOM

返回累积二项分布大于或等于条件值的最小值。

## 语法

```javascript
expression.CRITBINOM(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 伯努利试验的次数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 每次试验成功的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 标准值，一个介于 0 和 1 之间（含 0 和 1）的数字。 |

## 返回值

number

## 示例

查找电子表格中满足概率阈值的最小数字。

```javascript editor-xlsx
// What is the minimum value where cumulative probability exceeds your target in a spreadsheet?

// Identify the threshold value for a binomial distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CRITBINOM(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);
```
