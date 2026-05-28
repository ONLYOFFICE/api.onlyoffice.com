# GetParagraphMarkTextPr

返回用于标记段落结尾的段落标记的文本属性。该标记也可以
具有常见的文本属性，如粗体、斜体、下划线等。

## 语法

```javascript
expression.GetParagraphMarkTextPr();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

访问文档中应用于段落结束标记的文本格式。

```javascript editor-docx
// How do I retrieve the text properties of the paragraph mark in a document?

// Change the font size, color, and spacing of the invisible paragraph mark symbol in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the font size, font color and spacing for the paragraph mark. ");
paragraph.AddText("You can see it if you download the document, open it and enable the invisible symbols display.");
let paragraphMarkTextPr = paragraph.GetParagraphMarkTextPr();
paragraphMarkTextPr.SetFontSize(52);
paragraphMarkTextPr.SetColor(Api.HexColor('#FFFF00'));
paragraphMarkTextPr.SetSpacing(5);
```
