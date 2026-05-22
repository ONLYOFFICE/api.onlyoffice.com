# HEX2OCT

将十六进制数转换为八进制数。

## 语法

```javascript
expression.HEX2OCT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要转换的十六进制数。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要使用的字符数。 |

## 返回值

number

## 示例

在电子表格中将十六进制数转换为八进制。

```javascript editor-xlsx
// How do I convert hexadecimal values to octal format in a spreadsheet?

// Transform a hex value into its octal representation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2OCT("FFFFFFFF9C"));
```
