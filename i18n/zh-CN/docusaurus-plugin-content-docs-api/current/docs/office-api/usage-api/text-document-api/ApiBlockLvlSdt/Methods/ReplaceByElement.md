# ReplaceByElement

用新元素替换当前内容控件。

## 语法

```javascript
expression.ReplaceByElement(oElement);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md) |  | 用于替换当前内容控件的元素。 |

## 返回值

boolean

## 示例

在文档中用段落替换内容控件。

```javascript editor-docx
// Create the block-level content control object and replace it with the paragraph object in a document.

// Replace the block level content control with a text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Name");
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content control was replaced with the current paragraph.");
blockLvlSdt.ReplaceByElement(paragraph);
```
