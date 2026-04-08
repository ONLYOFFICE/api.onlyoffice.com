# GetText

返回批注回复文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取批注回复文本。

```javascript editor-docx
// How to get a raw text of a comment reply.

// Get all comments from the presentation, get the first one's reply and return its text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let text = commentReply.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply text: " + text);
doc.Push(paragraph);
```
