# EXPONDIST

返回指数分布。

## 语法

```javascript
expression.EXPONDIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | x 函数的值，一个非负数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | lambda 参数值，一个正数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | 决定函数形式的逻辑值。如果此参数为 **true**，函数将返回累积分布函数；如果为 **false**，则返回概率密度函数。 |

## 返回值

number

## 示例

此示例演示如何返回指数分布。

```javascript editor-xlsx
// How to get the exponential distribution.

// Use function to calculate an exponential distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.F_DIST(10, 6, 4, false);
worksheet.GetRange("B2").SetValue(ans);
```
