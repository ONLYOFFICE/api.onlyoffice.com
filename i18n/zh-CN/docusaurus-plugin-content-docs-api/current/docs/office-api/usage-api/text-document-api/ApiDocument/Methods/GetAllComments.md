# GetAllComments

返回当前文档中的所有批注。

## 语法

```javascript
expression.GetAllComments();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)[]

## 示例

此示例展示如何获取当前文档中的所有批注。

```javascript editor-docx
// Get all comments added to the document.

// How to retrieve all comments and display the class type of the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let type = comments[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);
```
