# SetSuff

指定将在给定编号级别文本和引用该编号级别的每个编号段落的文本之间添加的内容。默认情况下，此值为 "tab"。

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

此示例指定将在给定编号级别文本和引用该编号级别的每个编号段落的文本之间添加的内容。

```javascript editor-docx
// How to set separating symbol between numbering and numbered text.

// Set space between numbering level text and the text itself.

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
