# SetIndLeft

设置段落左侧缩进。

继承自 [ApiParaPr.SetIndLeft](../../ApiParaPr/Methods/SetIndLeft.md)。

## 语法

```javascript
expression.SetIndLeft(nValue);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 段落左侧缩进值，以磅的二十分之一（1/1440 英寸）为单位。 |

## 返回值

boolean

## 示例

在文档中将段落的整个左边缘从页边距向内移动。

```javascript editor-docx
// How do I shift a paragraph away from the left margin by a specific amount in a document?

// Push a paragraph's left boundary inward to create a visual offset from surrounding text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetIndLeft(2880);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any indent set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
