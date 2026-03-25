# GetRepliesCount

返回批注回复的数量。

## 语法

```javascript
expression.GetRepliesCount();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

此示例展示如何获取批注回复的数量。

```javascript editor-docx
// How to get a number of replies a comment has.

// Get all comments from the presentation and the first one's number of replies.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let repliesCount = comments[0].GetRepliesCount();
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of comment replies: " + repliesCount);
doc.Push(paragraph);
```
