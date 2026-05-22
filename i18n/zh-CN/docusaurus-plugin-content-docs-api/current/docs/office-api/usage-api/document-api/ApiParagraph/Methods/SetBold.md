# SetBold

为文本字符设置粗体属性。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定此段落的内容显示为粗体。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

将文档中段落的所有文本设为粗体。

```javascript editor-docx
// How do I apply bold formatting to an entire paragraph in a document?

// Emphasize a paragraph's content by enabling bold weight on all its characters in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to bold.");
paragraph.SetBold(true);
```
