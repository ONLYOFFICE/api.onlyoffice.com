# MIDB

从指定字符串的任意位置开始提取字符，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

## 语法

```javascript
expression.MIDB(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要从中提取字符的文本字符串。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要提取的第一个字符的位置。第一个文本字符是 1。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 基于字节的要提取的字符数。 |

## 返回值

string

## 示例

此示例演示如何从指定字符串的任意位置开始提取字符，适用于使用双字节字符集 (DBCS) 的语言，如日语、中文、韩语等。

```javascript editor-xlsx
// How to get an array of characters from the specified position.

// Use a function to get an array of characters from the string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MIDB("Online Office", 3, 4));
```
