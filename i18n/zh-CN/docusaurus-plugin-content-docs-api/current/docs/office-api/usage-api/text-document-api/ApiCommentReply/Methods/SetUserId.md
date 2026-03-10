# SetUserId

设置批注回复作者的用户 ID。

## 语法

```javascript
expression.SetUserId(sUserId);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sUserId | 必需 | string |  | 批注回复作者的用户 ID。 |

## 返回值

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md)

## 示例

此示例设置批注回复作者的用户 ID。

```javascript editor-docx
// How to change a user ID of a comment reply.

// Get all comments from the presentation and change its first one's reply user ID.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetUserId("uid-1");
let userId = commentReply.GetUserId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply user ID: " + userId);
doc.Push(paragraph);
```
