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

从文档中检索所有批注并读取第一个批注的类类型。

```javascript editor-docx
// How do I get every comment in a document so I can inspect or process them in a document?

// Confirm the type of a comment object after collecting the full set of reviewer annotations in a document.

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
