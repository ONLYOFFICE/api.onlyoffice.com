# SetAuthorName

设置批注作者的姓名。

## 语法

```javascript
expression.SetAuthorName(sAuthorName);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAuthorName | 必需 | string |  | 批注作者的姓名。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例设置批注作者的姓名。

```javascript editor-docx
// How to change a comment's author name.

// Get all comments from the presentation and set an author for the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetAuthorName("Mark Potato");
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment author's name was changed");
doc.Push(paragraph);
```
