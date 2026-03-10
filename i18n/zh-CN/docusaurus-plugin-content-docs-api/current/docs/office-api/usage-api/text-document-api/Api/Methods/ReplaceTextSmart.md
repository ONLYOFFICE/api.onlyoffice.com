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

此示例在保留格式和其他内容的同时替换文本。

```javascript editor-docx
// Adds a text to the first paragraph of the document, sets the bold and italic properties to it, and replaces it with a new text preserving the text style.

// Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings.

// How to replace the selected ApiRange object with a new text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the normal text. ");
paragraph.AddText("The is bold text. ").SetBold(true);
paragraph.AddText("This is italic text.").SetItalic(true);

paragraph.GetRange().Select();
Api.ReplaceTextSmart(["This is the normal text. This bold text was smart replaced. This is italic text."]);
```
