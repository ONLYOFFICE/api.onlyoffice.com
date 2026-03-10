# GetTime

返回批注创建时间戳（当前时区格式）。

## 语法

```javascript
expression.GetTime();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

此示例展示如何获取批注创建时间戳（当前时区格式）。

```javascript editor-docx
// How to know when a comment was added.

// Get all comments from the presentation and the first one's time of creation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTime("1672247153658");
let time = comments[0].GetTime();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment creation timestamp: " + time);
doc.Push(paragraph);
```
