# SIGN

返回数字的符号：如果数字为正数则返回 **1**，如果数字为零则返回 **0**，如果数字为负数则返回 **-1**。

## 语法

```javascript
expression.SIGN(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 任何实数。 |

## 返回值

number

## 示例

此示例演示如何返回数字的符号：如果数字为正数则返回 1，如果数字为零则返回 0，如果数字为负数则返回 -1。

```javascript editor-xlsx
// How to find out whether a number is positive or negative.

// Use a function to get a sign of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIGN(12));
```
