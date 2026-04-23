# SetUserId

设置批注作者的用户 ID。

## 语法

```javascript
expression.SetUserId(sUserId);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sUserId | 必需 | string |  | 批注作者的用户 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例设置批注作者的用户 ID。

```javascript editor-docx
// How to change an author's user ID of a comment.

// Get all comments from the presentation and change its first one's user ID.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetUserId("uid-1");
let userId = comments[0].GetUserId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment user ID: " + userId);
doc.Push(paragraph);
```
