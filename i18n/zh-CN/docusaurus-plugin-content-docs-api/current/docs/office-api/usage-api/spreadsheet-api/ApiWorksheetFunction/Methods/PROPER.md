# PROPER

将文本字符串转换为首字母大写：每个单词的首字母大写，其他字母小写。

## 语法

```javascript
expression.PROPER(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 用引号括起来的文本、返回文本的公式或包含要部分大写的文本的单元格引用。 |

## 返回值

string

## 示例

此示例演示如何将文本字符串转换为首字母大写：每个单词的首字母大写，其他字母小写。

```javascript editor-xlsx
// How to make each word's first letter uppercase.

// Use a function to make proper casing for all text strings.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PROPER("dAVID CONNOR"));
```
