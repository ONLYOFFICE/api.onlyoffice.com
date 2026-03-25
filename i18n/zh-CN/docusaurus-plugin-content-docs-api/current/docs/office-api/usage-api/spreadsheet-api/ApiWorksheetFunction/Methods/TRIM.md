# TRIM

从文本字符串中删除所有空格，但单词之间的单个空格除外。

## 语法

```javascript
expression.TRIM(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将从中删除空格的文本。 |

## 返回值

string

## 示例

此示例演示如何删除文本字符串中的所有空格，但保留单词之间的单个空格。

```javascript editor-xlsx
// How to delete unneccessary spaces from the text.

// Use a function to clear spaces from a string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRIM("  Online Office"));
```
