# AddReply

向批注添加回复。

## 语法

```javascript
expression.AddReply(sText, sAuthorName, sUserId, nPos);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | String |  | 批注回复文本。 |
| sAuthorName | 可选 | String |  | 批注回复作者的姓名。 |
| sUserId | 可选 | String |  | 批注回复作者的用户 ID。 |
| nPos | 可选 | Number | -1 | 批注回复位置。如果 nPos=-1，则添加到末尾。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

向文档中的批注添加回复。

```javascript editor-docx
// How do I add a reply to a comment in a document?

// Respond to an existing comment on a paragraph to continue a review thread in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
```
