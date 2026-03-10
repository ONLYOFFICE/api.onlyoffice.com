# NORMDIST

返回指定平均值和标准偏差的正态累积分布。

## 语法

```javascript
expression.NORMDIST(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回分布的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的算术平均值。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的标准差，一个正数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 决定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，则函数返回累积分布函数。如果为 **false**，则函数返回概率质量函数。 |

## 返回值

number

## 示例

此示例演示如何返回标准正态累积分布（平均值为零，标准差为一）。

```javascript editor-xlsx
// How to calculate the standard normal cumulative distribution.

// Use a function to get the standard normal cumulative distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NORMDIST(36, 6, 7, false));
```
