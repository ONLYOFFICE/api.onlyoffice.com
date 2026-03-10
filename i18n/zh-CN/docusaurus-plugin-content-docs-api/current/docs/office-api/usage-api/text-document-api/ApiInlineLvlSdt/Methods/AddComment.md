# AddComment

向当前内联内容控件添加批注。
💡 请注意，此内联内容控件必须在文档中。

## 语法

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注文本。 |
| sAuthor | 可选 | string |  | 作者姓名。 |
| sUserId | 可选 | string |  | 批注作者的用户 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例向内联内容控件添加批注。

```javascript editor-docx
// How to comment an inline text element.

// Add comment to the text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddComment("comment", "John Smith");
```
