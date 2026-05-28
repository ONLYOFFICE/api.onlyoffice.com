# MROUND

返回舍入到所需倍数的数字。

## 语法

```javascript
expression.MROUND(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要舍入的值。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要将数字舍入到的倍数。 |

## 返回值

number

## 示例

在电子表格中将数字舍入到另一个值的最近倍数。

```javascript editor-xlsx
// What is a number rounded to a specific multiple in a spreadsheet?

// Adjust a value to the closest increment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MROUND(14.35, 0.4));
```
