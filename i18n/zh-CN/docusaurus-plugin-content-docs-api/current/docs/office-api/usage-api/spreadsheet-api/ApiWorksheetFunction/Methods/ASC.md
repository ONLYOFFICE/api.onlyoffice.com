# ASC

对于双字节字符集 (DBCS) 语言，该函数将全角（双字节）字符转换为半角（单字节）字符。

## 语法

```javascript
expression.ASC(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要更改的文本或包含要更改文本的单元格引用。 |

## 返回值

string

## 示例

此示例演示对于双字节字符集 (DBCS) 语言，该函数如何将全角（双字节）字符转换为半角（单字节）字符。

```javascript editor-xlsx
// How to make characters half-width (single-byte) characters.

// Use function to make characters half-width.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASC("text"));
```
