# LEFT

从文本字符串的开头返回指定数量的字符。

## 语法

```javascript
expression.LEFT(arg1, arg2);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 包含要提取字符的文本字符串。 |
| arg2 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 子字符串的字符数。必须大于或等于 0。 |

## 返回值

string

## 示例

从电子表格中文本的开头提取字符。

```javascript editor-xlsx
// How do I get the first few letters or a prefix from a text string in a spreadsheet?

// Retrieve a specific number of characters counting from the left side of text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFT("Online Office", 6));
```
