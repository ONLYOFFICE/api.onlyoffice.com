# BASE

将数字转换为具有给定基数的文本表示形式。

## 语法

```javascript
expression.BASE(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要转换的数字。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 数字将转换为的基数。大于或等于 2 且小于或等于 36 的整数。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 返回字符串的最小长度。大于或等于 0 且小于 256 的整数。如果省略，则不向结果添加前导零。 |

## 返回值

number

## 示例

在电子表格中将数字转换为所选进制（如二进制或十六进制）的文本表示。

```javascript editor-xlsx
// Express a number in a different numeral base in a spreadsheet.

// Rewrite a decimal value as a string in any radix with a minimum digit width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BASE(5, 2, 5));
```
