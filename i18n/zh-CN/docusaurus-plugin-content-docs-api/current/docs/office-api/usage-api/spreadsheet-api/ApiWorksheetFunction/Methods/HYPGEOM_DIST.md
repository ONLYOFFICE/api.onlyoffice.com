# HYPGEOM_DIST

返回超几何分布。

## 语法

```javascript
expression.HYPGEOM_DIST(arg1, arg2, arg3, arg4, arg5);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 样本中的成功次数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 样本大小。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 总体中的成功次数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 总体大小。 |
| arg5 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 确定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，函数返回累积分布函数。如果为 **false**，函数返回概率质量函数。 |

## 返回值

number

## 示例

计算电子表格中累积或概率密度的超几何分布。

```javascript editor-xlsx
// How do I compute hypergeometric probabilities with different distribution types in a spreadsheet?

// Return cumulative or probability density values from a hypergeometric distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPGEOM_DIST(2, 3, 3, 12, true));
```
