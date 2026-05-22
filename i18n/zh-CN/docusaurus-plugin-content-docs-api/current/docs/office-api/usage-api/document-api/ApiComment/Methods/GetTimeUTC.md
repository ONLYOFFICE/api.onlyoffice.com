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

读取文档中批注的 UTC 格式创建时间戳。

```javascript editor-docx
// How do I get the UTC creation time of a comment in a document?

// Store or compare comment timestamps across time zones using a UTC-normalized value.

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
