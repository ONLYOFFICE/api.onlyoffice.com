# LENB

分析指定的字符串并返回其包含的字符数，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

## 语法

```javascript
expression.LENB(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将返回其长度的文本。空格被视为字符。 |

## 返回值

number

## 示例

计算电子表格中多字节字符语言的文本字节长度。

```javascript editor-xlsx
// How do I measure text length in Chinese, Japanese, or other double-byte languages in a spreadsheet?

// Get the byte count of text instead of character count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LENB("Online Office"));
```
