# RIGHTB

根据指定的字符数，从字符串的最右侧字符开始提取子字符串，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

## 语法

```javascript
expression.RIGHTB(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 包含要提取字符的文本字符串。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 基于字节的子字符串字符数。 |

## 返回值

string

## 示例

在电子表格中从双字节语言的文本提取字符。

```javascript editor-xlsx
// How do I get the last characters from text in Asian languages in a spreadsheet?

// Retrieve characters from the right side of text that uses multi-byte characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHTB("Online Office", 2));
```
