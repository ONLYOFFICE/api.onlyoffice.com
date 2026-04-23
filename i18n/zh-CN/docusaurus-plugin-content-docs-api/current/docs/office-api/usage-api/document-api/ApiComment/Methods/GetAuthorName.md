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

此示例展示如何获取批注作者的姓名。

```javascript editor-docx
// How to find out a comment's author.

// Get all comments from the presentation and display the first one's author name.

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
