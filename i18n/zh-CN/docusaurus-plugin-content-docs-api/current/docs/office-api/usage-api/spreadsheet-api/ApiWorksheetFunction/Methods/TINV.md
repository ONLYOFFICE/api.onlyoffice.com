# TINV

返回学生 t 分布的双尾逆函数。

## 语法

```javascript
expression.TINV(arg1, arg2);
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

此示例演示如何返回学生 t 分布的双尾反函数。

```javascript editor-xlsx
// How to create a serial number from the two-tailed inverse.

// Use a function to get two-tailed inverse of the Student's t-distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.TINV(0.5, 10);
worksheet.GetRange("B2").SetValue(result);


```
