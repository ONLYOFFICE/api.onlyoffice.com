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

此示例将选择中的每个段落（或单元格中的文本）替换为字符串数组中的相应文本。

```javascript editor-xlsx
// Replace string values of the selected range with a new values.

// Replace cell string values with a new ones.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:A2");
range.Select();
Api.ReplaceTextSmart(["Cell 1", "Cell 2"]);
```
