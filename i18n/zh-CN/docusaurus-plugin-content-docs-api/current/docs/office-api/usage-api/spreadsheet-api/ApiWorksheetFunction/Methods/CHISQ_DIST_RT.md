# CHISQ_DIST_RT

返回卡方分布的右尾概率。

## 语法

```javascript
expression.CHISQ_DIST_RT(arg1, arg2);
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

查找电子表格中卡方分布中超过某一值的结果百分比。

```javascript editor-xlsx
// Determine the upper tail probability for comparing observed versus expected frequencies in a spreadsheet.

// Assess how unusual a chi-squared test result is by measuring its right-tail probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST_RT(12, 10));
```
