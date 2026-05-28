# NORM_S_DIST

返回标准正态分布（平均值为零，标准偏差为一）。

## 语法

```javascript
expression.NORM_S_DIST(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回分布的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 确定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，函数返回累积分布函数。如果为 **false**，函数返回概率质量函数。 |

## 返回值

number

## 示例

计算电子表格中给定值的标准正态分布。

```javascript editor-xlsx
// How do I compute the standard normal distribution in a spreadsheet?

// Find the probability of a value in a standard normal distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORM_S_DIST(1.33, true));
```
