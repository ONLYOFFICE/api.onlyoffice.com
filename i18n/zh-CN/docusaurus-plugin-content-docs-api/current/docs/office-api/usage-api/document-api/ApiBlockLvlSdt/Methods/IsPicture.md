# IsPicture

检查内容控件是否为图片控件。
此方法验证内容控件是否为图片控件。

## 语法

```javascript
expression.IsPicture();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查文档中的内容控件是否包含图片或纯文本。

```javascript editor-docx
// How do I tell if a content control is a picture control in a document?

// Compare a text content control and a picture content control to see which type each one is in a document.

const doc = Api.GetDocument();

const textSdt = Api.CreateBlockLvlSdt();
textSdt.GetContent().GetElement(0).AddText('This is a regular text content control.');
doc.AddElement(0, textSdt);

const pictureSdt = doc.AddPictureContentControl(Api.MillimetersToEmus(70), Api.MillimetersToEmus(10));

const paragraph = Api.CreateParagraph();
paragraph.AddText('Text control IsPicture: ' + textSdt.IsPicture());
paragraph.AddLineBreak();
paragraph.AddText('Picture control IsPicture: ' + pictureSdt.IsPicture());
doc.Push(paragraph);
```
