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

此示例演示如何根据起始位置和长度返回文本字符串中间的字符。

```javascript editor-xlsx
// How to get characters from the middle of the string indicating an index and length.

// Use a function to get an array of characters from the middle of a string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MID("Online Office", 3, 4));
```
