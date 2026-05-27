# GetText

返回批注文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中批注的文本内容。

```javascript editor-docx
// How do I get the message written inside a comment in a document?

// Extract a comment's text to display or process reviewer notes programmatically.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let text = comments[0].GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment text: " + text);
doc.Push(paragraph);
```
