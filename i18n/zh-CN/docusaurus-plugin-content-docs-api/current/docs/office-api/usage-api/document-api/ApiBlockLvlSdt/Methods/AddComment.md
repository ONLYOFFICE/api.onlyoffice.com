# AddComment

向当前块级内容控件添加批注。
💡 请注意，当前块级内容控件必须在文档中。

## 语法

```javascript
expression.AddComment(text, author, userId);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 批注文本。 |
| author | 可选 | string |  | 作者姓名。 |
| userId | 可选 | string |  | 批注作者的用户 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

向文档中的块级内容控件添加批注。

```javascript editor-docx
// Create a block content control in the document class, add a paragraph with a text to it, and add a comment to the content control.

// John Smith comments on the block content control in the current document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");
```
