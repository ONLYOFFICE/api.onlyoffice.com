# GetClassType

返回 ApiTextPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textPr"

## 示例

此示例获取类类型并将其粘贴到文档中。

```javascript editor-docx
// How to get a class type of ApiTextPr.

// Retrieve class type of ApiTextPr object and insert it to the document.

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
