# IsSolved

检查批注是否已解决。

## 语法

```javascript
expression.IsSolved();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查批注是否已解决。

```javascript editor-docx
// How to know whether a comment is resolved or not.

// Get a boolean value that indicates that a comment is solved.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetSolved(true);
let solved = comments[0].IsSolved();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment is solved: " + solved);
doc.Push(paragraph);
```
