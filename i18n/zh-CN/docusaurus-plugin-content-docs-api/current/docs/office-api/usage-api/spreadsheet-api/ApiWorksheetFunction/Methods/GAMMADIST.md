# GAMMADIST

返回伽玛分布。

## 语法

```javascript
expression.GAMMADIST(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算分布的值，一个非负数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 alpha 参数，一个正数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 分布的 beta 参数，一个正数。如果此参数等于 1，则函数返回标准伽玛分布。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 决定函数形式的逻辑值（**true** 或 **false**）。如果为 **true**，则函数返回累积分布函数。如果为 **false**，则函数返回概率密度函数。 |

## 返回值

number

## 示例

此示例演示如何返回伽玛分布。

```javascript editor-xlsx
// How to calculate the gamma distribution.

// Use a function to get the result from a gamma distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMADIST(10, 9, 2, false);
worksheet.GetRange("B2").SetValue(ans);


```
