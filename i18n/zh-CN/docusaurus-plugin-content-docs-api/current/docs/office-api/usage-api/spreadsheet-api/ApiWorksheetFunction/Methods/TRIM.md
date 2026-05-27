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

从电子表格中的文本移除多余空格，保留单词之间的单个空格。

```javascript editor-xlsx
// How do I clean up spacing in text within a spreadsheet?

// Delete unnecessary spaces from a text string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRIM("  Online Office"));
```
