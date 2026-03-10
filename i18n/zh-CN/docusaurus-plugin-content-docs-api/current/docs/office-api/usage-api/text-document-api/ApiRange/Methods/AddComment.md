# AddComment

向当前范围添加批注。

## 语法

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 批注文本。 |
| sAuthor | 可选 | string |  | 作者姓名。 |
| sUserId | 可选 | string |  | 批注作者的用户 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例向范围添加批注。

```javascript editor-docx
// How to comment a range of document.

// Insert a comment into the 'ONLYOFFICE' range and add an author to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document");
let range = doc.GetRange(0, 7);
range.AddText("ONLYOFFICE ", "before");
range.AddText(" Builder", "after");
range.AddComment("comment", "John Smith");
```
