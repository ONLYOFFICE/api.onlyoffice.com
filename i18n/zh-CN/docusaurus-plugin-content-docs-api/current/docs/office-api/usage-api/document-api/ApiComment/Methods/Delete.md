# Delete

从文档中删除当前批注。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中删除批注。

```javascript editor-docx
// How do I delete a comment from a document?

// Remove an unwanted annotation after a review is complete in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].Delete();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment to the first paragraph was deleted");
doc.Push(paragraph);
```
