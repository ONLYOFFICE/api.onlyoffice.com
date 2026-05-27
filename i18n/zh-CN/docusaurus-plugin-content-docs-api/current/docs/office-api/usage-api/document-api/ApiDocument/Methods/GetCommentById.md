# GetCommentById

通过 ID 从当前文档返回批注。

## 语法

```javascript
expression.GetCommentById(sId);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | 必需 | string |  | 批注 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

通过唯一 ID 获取文档中的特定批注。

```javascript editor-docx
// How do I look up a comment using its ID in a document?

// Read the author name of a known comment by retrieving it with its ID in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let comment = doc.GetCommentById(comments[0].GetId());
let author = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + author);
doc.Push(paragraph);
```
