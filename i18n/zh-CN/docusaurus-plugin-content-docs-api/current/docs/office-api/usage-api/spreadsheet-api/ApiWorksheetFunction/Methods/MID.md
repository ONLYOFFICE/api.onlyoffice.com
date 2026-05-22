# MID

根据起始位置和长度，返回文本字符串中间的字符。

## 语法

```javascript
expression.MID(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要从中提取字符的文本字符串。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要提取的第一个字符的位置。第一个文本字符是 1。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 要提取的字符数。 |

## 返回值

string

## 示例

从电子表格中字符串的中间位置开始提取文本。

```javascript editor-xlsx
// What characters can I pull from a text string in a spreadsheet?

// Get a substring from a specific position and length in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MID("Online Office", 3, 4));
```
