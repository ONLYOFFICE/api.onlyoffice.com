# QUOTIENT

返回除法的整数部分。

## 语法

```javascript
expression.QUOTIENT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 被除数，一个数值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 除数，一个数值。 |

## 返回值

number

## 示例

在电子表格中返回除法的整数部分。

```javascript editor-xlsx
// How to get the integer part from the result of division in a spreadsheet.

// Use a function to integer part from division in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.QUOTIENT(1698, 30));
```
