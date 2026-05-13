# GetClassType

返回 ApiTextPr 类的类型。

继承自 [ApiTextPr.GetClassType](../../ApiTextPr/Methods/GetClassType.md)。

## 示例

获取文档中文本属性的类类型。

```javascript editor-docx
// How to identify the class type of a text properties in a document?

// Obtain the class type identifier of a text properties object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
let textPr = Api.CreateTextPr();
textPr.SetFontSize(32);
textPr.SetBold(true);
paragraph.SetTextPr(textPr);
textPr = paragraph.GetTextPr();
let classType = textPr.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
