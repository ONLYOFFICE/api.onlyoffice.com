# GetPlaceholderText

返回当前内联内容控件的占位符文本。

## 语法

```javascript
expression.GetPlaceholderText();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索文档中内联内容控件上设置的占位符文本。

```javascript editor-docx
// How do I read the placeholder text of an inline content control in a document?

// Confirm the placeholder message is stored correctly before displaying it to users in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.SetPlaceholderText("Enter your text here");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let placeholderText = inlineLvlSdt.GetPlaceholderText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Placeholder text: " + placeholderText);
doc.Push(paragraph);
```
