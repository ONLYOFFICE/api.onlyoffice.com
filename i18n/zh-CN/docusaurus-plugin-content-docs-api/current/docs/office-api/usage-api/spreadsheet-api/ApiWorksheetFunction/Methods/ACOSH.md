# ACOSH

返回数字的反双曲余弦值。

## 语法

```javascript
expression.ACOSH(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 任何大于或等于 1 的实数。 |

## 返回值

number

## 示例

此示例演示如何返回数字的反双曲余弦。

```javascript editor-xlsx
// How to get an inverse hyperbolic cosine of a number and display it in the worksheet.

// Get a function that gets inverse hyperbolic cosine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOSH(3.25));
```
