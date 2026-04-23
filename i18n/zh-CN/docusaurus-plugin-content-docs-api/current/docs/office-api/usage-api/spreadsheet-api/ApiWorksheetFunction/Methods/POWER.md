# POWER

返回数字的幂运算结果。

## 语法

```javascript
expression.POWER(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 底数。可以是任何实数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 底数的指数。 |

## 返回值

number

## 示例

此示例演示如何返回数字的幂次方结果。

```javascript editor-xlsx
// How to raise a number to a power.

// Use a function to calculate the result after raising a number to the power.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.POWER(23, 4));
```
