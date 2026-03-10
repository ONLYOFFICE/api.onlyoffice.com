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

此示例向块级内容控件添加批注。

```javascript editor-docx
// Creates a block content control in the ApiDocument class, adds a paragraph with a text to it, and adds a comment to the content control.

// How to add a comment written by John Smith to the ApiBlockLvlSdt object.

// John Smith comments on the block content control in the current document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");
```
