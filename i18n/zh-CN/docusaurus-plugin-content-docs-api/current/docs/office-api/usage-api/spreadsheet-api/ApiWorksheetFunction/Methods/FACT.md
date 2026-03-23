# FACT

返回数字的阶乘，等于 *1*2*3*...* 数字。

## 语法

```javascript
expression.FACT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算阶乘的非负数。 |

## 返回值

number

## 示例

此示例演示如何返回数字的阶乘，即 1*2*3*...*数字。

```javascript editor-xlsx
// How to calculate a number factorial.

// Use function to calculate the factorial of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACT(123));
```
