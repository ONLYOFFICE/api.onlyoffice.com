# GetTimeUTC

返回批注创建时间戳（UTC 格式）。

## 语法

```javascript
expression.GetTimeUTC();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

此示例展示如何获取批注创建时间戳（UTC 格式）。

```javascript editor-docx
// How to know when a comment was added.

// Get all comments from the presentation and the first one's time of creation in UTC format.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTimeUTC("1672247153658");
let timeUTC = comments[0].GetTimeUTC();
paragraph = Api.CreateParagraph();
paragraph.AddText("The timestamp of comment creation in UTC format: " + timeUTC);
doc.Push(paragraph);
```
