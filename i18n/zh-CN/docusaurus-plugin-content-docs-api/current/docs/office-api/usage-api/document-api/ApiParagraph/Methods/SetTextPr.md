# SetTextPr

设置段落文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 段落文本属性。 |

## 返回值

boolean

## 示例

在文档中为段落内的所有文本应用共享文本格式。

```javascript editor-docx
// How do I set the same font style and size for every character in a paragraph in a document?

// Uniformly style all text in a paragraph by defining its appearance once in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);
```
