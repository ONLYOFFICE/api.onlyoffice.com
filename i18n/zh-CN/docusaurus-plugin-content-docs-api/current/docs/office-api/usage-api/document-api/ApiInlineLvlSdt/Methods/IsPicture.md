# IsPicture

检查内容控件是否为图片控件。
此方法验证内容控件是否为图片控件。

## 语法

```javascript
expression.IsPicture();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的内容控件是否为图片。

```javascript editor-docx
// How to is picture for an inline content control in a document?

// Is picture and display the result in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
let isPicture = inlineControl.IsPicture();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a picture? " + isPicture);
doc.Push(paragraph);
```
