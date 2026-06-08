# CHISQ_DIST

返回卡方分布的左尾概率。

## 语法

```javascript
expression.CHISQ_DIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算分布的值，一个非负数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 自由度数，一个介于 1 和 10^10 之间的数字，不包括 10^10。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 确定函数形式的逻辑值。如果此参数等于 **true**，则返回累积分布函数；如果等于 **false**，则返回概率密度函数。 |

## 返回值

number

## 示例

获取电子表格中卡方分布中到特定点的结果累积百分比。

```javascript editor-xlsx
// Determine what portion of the distribution falls at or below a given value in a spreadsheet.

// Evaluate how likely it is to see results less than or equal to an observed chi-squared value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST(2, 3, false));
```
