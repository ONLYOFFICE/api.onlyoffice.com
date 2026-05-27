# T_INV

返回学生 t 分布的左尾逆函数。

## 语法

```javascript
expression.T_INV(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 与双尾学生 t 分布相关的概率，一个介于 0 和 1 之间（含 0 和 1）的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示分布特征自由度数的正整数。 |

## 返回值

number

## 示例

查找电子表格中给定左尾概率的 t 值。

```javascript editor-xlsx
// How do I determine the t-value that corresponds to a probability in a spreadsheet?

// Get the inverse of the left-tailed t-distribution to find critical values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.T_INV(0.75, 2);
worksheet.GetRange("B2").SetValue(result);
```
