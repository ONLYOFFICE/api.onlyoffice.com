# TRUNC

通过删除数字的小数部分将数字截断为整数。

## 语法

```javascript
expression.TRUNC(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 将被截断的数字。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 指定截断精度的数字。如果省略此参数，则等于 0（零）。 |

## 返回值

number

## 示例

在电子表格中不进行舍入地移除数字的小数位。

```javascript editor-xlsx
// How do I truncate a number to a specific number of decimal places in a spreadsheet?

// Cut off the decimal portion of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRUNC(3.14159265, 5));
```
