# GetAuthorName

返回批注回复作者的姓名。

## 语法

```javascript
expression.GetAuthorName();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从文档中的批注回复检索作者名称。

```javascript editor-docx
// How do I read the name of the person who wrote a comment reply in a document?

// Identify who contributed a specific reply when auditing comment threads.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("First comment reply's author: " + commentReply.GetAuthorName());
doc.Push(paragraph);
```
