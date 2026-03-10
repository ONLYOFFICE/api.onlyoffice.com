# AddComment

向当前文档选区添加批注，如果未选择文本，则向当前单词添加批注。

## 语法

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注文本。 |
| sAuthor | 可选 | string |  | 作者姓名。 |
| sUserId | 可选 | string |  | 批注作者的用户 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例向文档添加批注。

```javascript editor-docx
// How to comment the document.

// Add comment to the document indicating the author.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
doc.AddComment("This is a comment to the document.", "Jane");
```
