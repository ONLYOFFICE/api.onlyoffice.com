# T_DIST

返回学生 t 分布的左尾。

## 语法

```javascript
expression.T_DIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算分布的数值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示分布特征自由度数的整数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 确定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，函数返回累积分布函数。如果为 **false**，函数返回概率密度函数。 |

## 返回值

number

## 示例

计算电子表格中学生 t 分布的左尾概率。

```javascript editor-xlsx
// How do I find the probability for a given t-value in a spreadsheet?

// Get the cumulative distribution function for the t-distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.T_DIST(1.5, 10, false);
worksheet.GetRange("B2").SetValue(ans);
```
