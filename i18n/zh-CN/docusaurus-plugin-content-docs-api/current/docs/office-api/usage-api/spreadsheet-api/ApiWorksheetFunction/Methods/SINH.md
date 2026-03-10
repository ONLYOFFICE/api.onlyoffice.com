# SINH

返回数字的双曲正弦值。

## 语法

```javascript
expression.SINH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其双曲正弦值的任何实数。 |

## 返回值

number

## 示例

此示例演示如何返回数字的双曲正弦。

```javascript editor-xlsx
// How to calaculate the hyperbolic sine of a number.

// Use a function to get a hyperbolic sine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SINH(4));
```
