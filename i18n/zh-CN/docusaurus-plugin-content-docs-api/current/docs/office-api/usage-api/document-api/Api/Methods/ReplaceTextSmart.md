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

用新文本替换所选文本，同时保留文档中原有的粗体和斜体格式。

```javascript editor-docx
// How do I replace text without losing its bold or italic styling in a document?

// Swap out paragraph text for new content and retain the existing character formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the normal text. ");
paragraph.AddText("The is bold text. ").SetBold(true);
paragraph.AddText("This is italic text.").SetItalic(true);

paragraph.GetRange().Select();
Api.ReplaceTextSmart(["This is the normal text. This bold text was smart replaced. This is italic text."]);
```
