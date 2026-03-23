# SetText

设置批注文本。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注文本。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例设置批注文本。

```javascript editor-docx
// How to change a text of a comment.

// Get all comments from the presentation and set its first one's text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetText("new comment's text");
```
