# GetId

返回当前批注 ID。如果批注没有 ID，则返回 null。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取批注 ID。

```javascript editor-docx
// Display comment author name by finding a comment by its ID.

// How to get a comment knowing its ID.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let comment = doc.GetCommentById(comments[0].GetId());
let authorName = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + authorName);
doc.Push(paragraph);
```
