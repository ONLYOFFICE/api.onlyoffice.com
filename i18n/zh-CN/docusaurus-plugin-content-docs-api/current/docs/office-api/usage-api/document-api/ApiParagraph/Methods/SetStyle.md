# SetStyle

段落样式基础方法。

:::note
此方法本身不单独使用，它仅构成 [ApiParagraph#SetStyle](../../ApiParagraph/Methods/SetStyle.md) 方法的基础，该方法为段落设置选定或创建的样式。
:::

继承自 [ApiParaPr.SetStyle](../../ApiParaPr/Methods/SetStyle.md)。

## 语法

```javascript
expression.SetStyle(oStyle);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 要设置的段落样式。 |

## 返回值

boolean

## 示例

在文档中为段落应用命名样式。

```javascript editor-docx
// How do I format a paragraph using one of the built-in styles in a document?

// Give a paragraph a consistent appearance by assigning it a predefined style in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
