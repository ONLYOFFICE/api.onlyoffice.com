# GetQuoteText

返回当前批注的引用文本。

## 语法

```javascript
expression.GetQuoteText();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

检索文档中与批注关联的引用文本。

```javascript editor-docx
// How do I get the text passage that a comment refers to in a document?

// Extract the exact excerpt a reviewer highlighted when leaving a comment.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let quoteText = comments[0].GetQuoteText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment quote text: " + quoteText);
doc.Push(paragraph);
```
