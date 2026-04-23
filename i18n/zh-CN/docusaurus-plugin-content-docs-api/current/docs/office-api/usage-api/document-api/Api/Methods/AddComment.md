# AddComment

向指定的文档元素或 Runs 数组添加批注。

## 语法

```javascript
expression.AddComment(element, text, author, userId);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | 必需 | [ApiRun](../../ApiRun/ApiRun.md)[] \| [DocumentElement](../../Enumeration/DocumentElement.md) |  | 将添加批注的元素。可以应用于任何具有 *AddComment* 方法的元素。 |
| text | 必需 | string |  | 批注文本。 |
| author | 可选 | string |  | 作者姓名。 |
| userId | 可选 | string |  | 批注作者的用户 ID。 |

## 返回值

[ApiComment](../../ApiComment/ApiComment.md)

## 示例

此示例向第一个段落添加文本和批注。

```javascript editor-docx
// How to add a comment to the ApiParagraph class.

// How to comment on text.

// Adds a paragraph to the document and comments on it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");
```
