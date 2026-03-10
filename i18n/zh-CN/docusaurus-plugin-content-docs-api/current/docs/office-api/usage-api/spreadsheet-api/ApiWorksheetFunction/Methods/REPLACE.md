# REPLACE

用不同的文本字符串替换文本字符串的一部分。

## 语法

```javascript
expression.REPLACE(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将替换某些字符的文本。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 原始文本中将被新文本替换的字符位置。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 原始文本中将被替换的字符数。 |
| arg4 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将替换原始文本中字符的文本。 |

## 返回值

string

## 示例

此示例演示如何用不同的文本字符串替换文本字符串的一部分。

```javascript editor-xlsx
// How to replace a substring with another one.

// Use a function to replace one part of a text with another one.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACE("Online Office", 8, 6, "portal"));
```
