# RIGHT

从文本字符串的末尾返回指定数量的字符。

## 语法

```javascript
expression.RIGHT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 包含要提取字符的文本字符串。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 子字符串的字符数。如果省略，函数将假定为 1。 |

## 返回值

string

## 示例

此示例演示如何从文本字符串的末尾返回指定数量的字符。

```javascript editor-xlsx
// How to get characters from the end of a string.

// Use a function to return n characters from the right part of a text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RIGHT("Online Office", 2));
```
