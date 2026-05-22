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

计算（数字 * pi）的平方根。

```javascript editor-xlsx
// The SQRTPI function returns the square root of the product of a number and pi (3.14159...).

// Get the square root of (5 * pi) and place it in cell A1.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));
```
