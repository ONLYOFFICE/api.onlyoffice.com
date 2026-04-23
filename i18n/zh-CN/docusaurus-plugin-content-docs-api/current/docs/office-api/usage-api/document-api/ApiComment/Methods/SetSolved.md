# SetSolved

将批注标记为已解决。

## 语法

```javascript
expression.SetSolved(bSolved);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bSolved | 必需 | boolean |  | 指定批注是否已解决。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例将批注标记为已解决。

```javascript editor-docx
// How to make a comment solved.

// Get all comments from the presentation and set it solved.

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
