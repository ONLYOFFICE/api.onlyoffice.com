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

此示例演示如何根据指定的字符数和起始位置用新的字符集替换一组字符，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

```javascript editor-xlsx
// How to replace a substring with another one using starting index and length.

// Use a function to replace one part of a text with another one indicating charachters count and index.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACEB("Online Office", 8, 6, "portal"));
```
