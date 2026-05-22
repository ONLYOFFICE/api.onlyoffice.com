# CHIINV

返回卡方分布右尾概率的逆函数。

## 语法

```javascript
expression.CHIINV(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与卡方分布相关的概率，一个介于 0 和 1 之间（含 0 和 1）的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 自由度数，一个介于 1 和 10^10 之间的数字，不包括 10^10。 |

## 返回值

number

## 示例

在电子表格中将右尾概率转换为匹配的卡方临界值。

```javascript editor-xlsx
// Identify the threshold where the upper tail of the chi-squared distribution starts in a spreadsheet.

// Establish the boundary point for statistical significance at a given probability level in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CHIDIST(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);
```
