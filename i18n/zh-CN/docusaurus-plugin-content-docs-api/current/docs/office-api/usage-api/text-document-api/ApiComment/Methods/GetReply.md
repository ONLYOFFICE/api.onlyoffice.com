# GetReply

返回指定的批注回复。

## 语法

```javascript
expression.GetReply(nIndex);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | 可选 | Number | 0 | 批注回复索引。 |

## 返回值

[ApiCommentReply](../../ApiCommentReply/ApiCommentReply.md)

## 示例

此示例展示如何获取指定的批注回复。

```javascript editor-docx
// Get a comment reply by knowing its index.

// How to get the first comment reply text and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("First comment reply: " + commentReply.GetText());
doc.Push(paragraph);
```
