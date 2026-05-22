# RemoveReplies

删除指定的批注回复。

## 语法

```javascript
expression.RemoveReplies(nPos, nCount, bRemoveAll);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | Number | 0 | 要删除的第一个批注回复的位置。 |
| nCount | 可选 | Number | 1 | 要删除的批注回复数量。 |
| bRemoveAll | 可选 | boolean | false | 指定是否删除所有批注回复。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

删除文档中批注的所有回复。

```javascript editor-docx
// How do I delete all replies attached to a comment in a document?

// Clear every reply from a comment to reset the discussion thread to a clean state.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
comments[0].RemoveReplies();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment replies were removed");
doc.Push(paragraph);
```
