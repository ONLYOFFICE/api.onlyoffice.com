# SetTime

设置批注创建时间戳（当前时区格式）。

## 语法

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | 必需 | Number \| String |  | 批注创建时间戳（当前时区格式）。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

使用本地时区设置文档中批注的创建时间戳。

```javascript editor-docx
// How do I assign a specific creation time to a comment in a document?

// Correct or backdate a comment's recorded time when importing or migrating annotations.

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
