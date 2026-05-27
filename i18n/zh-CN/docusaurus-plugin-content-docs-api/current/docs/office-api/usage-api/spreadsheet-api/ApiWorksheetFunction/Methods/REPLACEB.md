# REPLACEB

根据指定的字符数和起始位置，用新的字符集替换一组字符，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

## 语法

```javascript
expression.REPLACEB(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将替换某些字符的文本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 原始文本中将被新文本替换的字符位置。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 基于字节的原始文本中将被替换的字符数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将替换原始文本中字符的文本。 |

## 返回值

string

## 示例

在电子表格中按位置和字符数替换文本的一部分，支持双字节字符。

```javascript editor-xlsx
// How do I replace text by counting characters from the start in languages like Chinese or Japanese in a spreadsheet?

// Swap a substring using byte positions instead of character positions for multilingual text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACEB("Online Office", 8, 6, "portal"));
```
