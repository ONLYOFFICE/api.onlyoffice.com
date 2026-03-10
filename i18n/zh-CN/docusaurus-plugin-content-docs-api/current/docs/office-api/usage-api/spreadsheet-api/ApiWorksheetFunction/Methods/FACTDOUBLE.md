# FACTDOUBLE

返回数字的双阶乘。

## 语法

```javascript
expression.FACTDOUBLE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要返回双阶乘的值。 |

## 返回值

number

## 示例

此示例演示如何返回数字的双阶乘。

```javascript editor-xlsx
// How to calculate a double factorial.

// Use function to calculate the double factorial of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACTDOUBLE(123));
```
