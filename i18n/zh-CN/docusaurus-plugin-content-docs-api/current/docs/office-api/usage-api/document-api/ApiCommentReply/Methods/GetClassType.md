# GetClassType

返回 ApiCommentReply 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCommentReply](../ApiCommentReply.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"commentReply"

## 示例

获取文档中批注回复对象的类类型。

```javascript editor-docx
// How can I get the class type of a comment reply in a document?

// Get the class type of a comment reply and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let type = commentReply.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);
```
