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

此示例展示如何获取批注文本。

```javascript editor-docx
// How to get a raw text of a comment.

// Get all comments from the presentation and the first one's text.

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
