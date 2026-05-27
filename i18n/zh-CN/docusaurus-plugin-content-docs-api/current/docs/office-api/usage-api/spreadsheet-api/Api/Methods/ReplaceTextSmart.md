# ReplaceTextSmart

用字符串数组中的相应文本替换选区中的每个段落（或单元格中的文本）。

## 语法

```javascript
expression.ReplaceTextSmart(textStrings, tab, newLine);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textStrings | 必需 | string[] |  | 替换字符串数组。 |
| tab | 可选 | string | "\t" | 用于在源文本中指定制表符的字符。 |
| newLine | 可选 | string | "\r\n" | 用于在源文本中指定换行符的字符。 |

## 返回值

boolean

## 示例

用列表中的新值替换电子表格中每个选定单元格的文本。

```javascript editor-xlsx
// How do I swap out the contents of multiple cells at once using a set of replacement values in a spreadsheet?

// Overwrite selected cell values in bulk using a matching array of strings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:A2");
range.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);
```
