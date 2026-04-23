# ABS

返回数字的绝对值，即不带符号的数字。

## 语法

```javascript
expression.ABS(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将返回其绝对值的实数。 |

## 返回值

number

## 示例

此示例演示如何获取数字的绝对值。

```javascript editor-xlsx
// How to add absolute value to the worksheet.

// Get a function that gets absolute value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ABS(-123.14));
```
