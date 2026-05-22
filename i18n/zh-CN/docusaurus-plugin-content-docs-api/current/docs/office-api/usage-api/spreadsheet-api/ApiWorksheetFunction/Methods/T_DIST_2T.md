# T_DIST_2T

返回学生 t 分布的双尾。

## 语法

```javascript
expression.T_DIST_2T(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算分布的数值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示分布特征自由度数的整数。 |

## 返回值

number

## 示例

计算电子表格中学生 t 分布的双尾概率。

```javascript editor-xlsx
// How do I find the two-tailed probability for a given t-value in a spreadsheet?

// Get the probability for both tails of the t-distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T_DIST_2T(1.5, 10));
```
