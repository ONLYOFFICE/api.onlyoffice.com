# SetSuff

指定将在给定编号级别文本和引用该编号级别的每个编号段落的文本之间添加的内容。默认情况下，此值为 “tab”。

## 语法

```javascript
expression.SetSuff(sType);
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "space" \| "tab" \| "none" |  | 在编号级别文本和编号段落中的文本之间添加的内容。 |

## 返回值

boolean

## 示例

设置文档中编号标签与其段落文本之间的分隔字符。

```javascript editor-docx
// How do I add a space between the list number and the paragraph content in a document?

// Control what follows the list marker before each item's text begins in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
numLvl.SetCustomType("decimalZero", "repeating text %1", "left");
numLvl.SetSuff("space");
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a numbered list using custom text with numbering");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a numbered list using custom text with numbering");
doc.Push(paragraph);
```
