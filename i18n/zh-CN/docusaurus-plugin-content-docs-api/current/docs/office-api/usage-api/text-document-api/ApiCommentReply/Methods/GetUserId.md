# GetUserId

返回批注回复作者的用户 ID。

## 语法

```javascript
expression.GetUserId();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取批注回复作者的用户 ID。

```javascript editor-docx
// How to get ID of the user who left the first reply to the first comment.

// Get the comment reply author ID.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetUserId("uid-2");
let userId = commentReply.GetUserId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply user ID: " + userId);
doc.Push(paragraph);
```
