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

此示例演示如何根据指定的字符数从字符串的最右侧字符开始提取子字符串，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

```javascript editor-xlsx
// How to get characters from the end of a string for languages that use the double-byte character set.

// Use a function to return n characters from the right part of a text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHTB("Online Office", 2));
```
