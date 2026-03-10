# SQRTPI

返回（数字 * pi）的平方根。

## 语法

```javascript
expression.SQRTPI(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | pi 乘以的数字。 |

## 返回值

number

## 示例

此示例演示如何返回（数字 * pi）的平方根。

```javascript editor-xlsx
// How to calculate the square root of a number multiplied by aa constant Pi.

// Use a function to get the square root of (number * pi).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));
```
