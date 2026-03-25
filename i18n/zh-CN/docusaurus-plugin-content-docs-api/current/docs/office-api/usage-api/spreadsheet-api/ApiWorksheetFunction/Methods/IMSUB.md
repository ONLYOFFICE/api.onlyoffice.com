# IMSUB

返回以 *x + yi* 或 *x + yj* 形式表示的两个复数的差。

## 语法

```javascript
expression.IMSUB(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将从中减去第二个数的复数。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要从第一个数中减去的复数。 |

## 返回值

number

## 示例

此示例演示如何返回以 x + yi 或 x + yj 形式表示的两个复数的差。

```javascript editor-xlsx
// How to substract two complex numbers.

// Use a function to get the difference of two complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSUB("1+3i", "-2+2.5i"));
```
