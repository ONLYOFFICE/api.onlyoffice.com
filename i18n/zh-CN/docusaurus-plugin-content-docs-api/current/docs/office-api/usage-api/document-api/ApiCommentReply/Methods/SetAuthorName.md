# SetAuthorName

设置批注回复作者的姓名。

## 语法

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | 必需 | string |  | 批注回复作者的姓名。 |

## 返回值

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md)

## 示例

设置文档中批注回复的作者名称。

```javascript editor-docx
// How do I change the author name of a comment reply in a document?

// Update who is shown as the reply author to reflect the correct contributor.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "John Smith", "uid-1", 0);
let commentReply = comments[0].GetReply(0);
commentReply.SetAuthorName("Mark Potato");
let authorName = commentReply.GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply author name: " + authorName);
doc.Push(paragraph);
```
