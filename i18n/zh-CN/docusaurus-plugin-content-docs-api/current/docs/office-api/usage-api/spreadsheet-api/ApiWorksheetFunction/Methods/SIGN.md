# SIGN

返回数字的符号：如果数字为正数，返回 **1**；如果数字为零，返回 **0**；如果数字为负数，返回 **-1**。

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

在电子表格中返回数字的符号：正数为 1，零为 0，负数为 -1。

```javascript editor-xlsx
// Determine the sign of a number using the SIGN function.

// Apply the function to display the sign value in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SIGN(12));
```
