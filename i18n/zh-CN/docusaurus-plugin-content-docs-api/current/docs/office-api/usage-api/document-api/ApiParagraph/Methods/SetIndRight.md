# SetIndRight

设置段落右侧缩进。

继承自 [ApiParaPr.SetIndRight](../../ApiParaPr/Methods/SetIndRight.md)。

## 语法

```javascript
expression.SetIndRight(nValue);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | 必需 | [twips](../../Enumeration/twips.md) |  | 段落右侧缩进值，以磅的二十分之一（1/1440 英寸）为单位。 |

## 返回值

boolean

## 示例

在文档中将段落的整个右边缘从页边距向内移动。

```javascript editor-docx
// How do I shift a paragraph away from the right margin by a specific amount in a document?

// Narrow a paragraph from the right side to create white space or set it apart from other content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("We also aligned the text in it by the right side. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
paragraph.SetIndRight(2880);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any offset set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
