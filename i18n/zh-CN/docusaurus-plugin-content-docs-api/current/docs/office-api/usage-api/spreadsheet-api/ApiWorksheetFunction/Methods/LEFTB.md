# LEFTB

从指定字符串的左侧字符开始提取子字符串，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

## 语法

```javascript
expression.LEFTB(arg1, arg2);
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

在电子表格中使用多字节字符的字节计数从字符串左侧提取文本。

```javascript editor-xlsx
// How do I get a substring from text in languages like Chinese or Japanese in a spreadsheet?

// Work with left-aligned text extraction that counts bytes instead of characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFTB("Online Office", 6));
```
