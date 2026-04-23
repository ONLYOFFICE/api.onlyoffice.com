# TDIST

返回学生 t 分布。

## 语法

```javascript
expression.TDIST(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 用于计算分布的数值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 表示分布特征自由度数的整数。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定要返回的分布尾数：单尾分布 = 1；双尾分布 = 2。 |

## 返回值

number

## 示例

此示例演示如何返回学生 t 分布。

```javascript editor-xlsx
// How to calculate a Student's t-distribution.

// Use a function to estimate a Student's t-distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.TDIST(1.5, 10, 1);
worksheet.GetRange("B2").SetValue(ans);


```
