# FACT

返回数字的阶乘，等于 *1*2*3*...* 数字。

## 语法

```javascript
expression.FACT(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将计算阶乘的非负数。 |

## 返回值

number

## 示例

在电子表格中返回数字的阶乘，即 1*2*3*...*数字。

```javascript editor-xlsx
// Calculate the factorial of a number.

// Apply FACT function to get the factorial value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACT(123));
```
