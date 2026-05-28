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

获取电子表格中一个值除以另一个值的整数结果。

```javascript editor-xlsx
// How do I find the integer portion of a division in a spreadsheet?

// Extract the quotient without the remainder from two numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.QUOTIENT(1698, 30));
```
