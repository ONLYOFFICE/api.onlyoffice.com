# ReplaceByElement

用新元素替换当前段落。

## 语法

```javascript
expression.ReplaceByElement(oElement);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 用于替换当前段落的元素。 |

## 返回值

boolean

## 示例

在文档中将段落替换为块级内容控件。

```javascript editor-docx
// How do I replace an existing paragraph with a content control in a document?

// Substitute plain text with a structured content container to enable form-like editing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The paragraph was replaced with the current content control.");
paragraph.ReplaceByElement(blockLvlSdt);
```
