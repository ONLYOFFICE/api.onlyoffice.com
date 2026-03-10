# SQRT

返回数字的平方根。

## 语法

```javascript
expression.SQRT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其平方根的数字。 |

## 返回值

number

## 示例

此示例演示如何返回数字的平方根。

```javascript editor-xlsx
// How to calculate the square root of a number.

// Use a function to get the square root of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRT(100));
```
