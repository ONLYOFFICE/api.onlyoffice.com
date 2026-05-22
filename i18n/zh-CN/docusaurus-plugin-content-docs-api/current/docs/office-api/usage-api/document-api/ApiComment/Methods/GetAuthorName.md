# GetAuthorName

返回批注作者的姓名。

## 语法

```javascript
expression.GetAuthorName();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从文档中的批注读取作者名称。

```javascript editor-docx
// How do I find out who wrote a comment in a document?

// Identify the person behind a comment by retrieving the name stored with it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let authorName = comments[0].GetAuthorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Author name: " + authorName);
doc.Push(paragraph);
```
