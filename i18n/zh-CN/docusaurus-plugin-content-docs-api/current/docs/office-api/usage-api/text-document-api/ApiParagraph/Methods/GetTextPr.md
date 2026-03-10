# GetTextPr

返回段落结束标记的文本属性。

## 语法

```javascript
expression.GetTextPr();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例展示如何获取段落文本属性。

```javascript editor-docx
// How to get text properties of the paragraph object.

// Get the paragraph text properties and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(32);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);
textPr = paragraph.GetTextPr();
textPr.SetItalic(true);
paragraph.SetTextPr(textPr);
```
