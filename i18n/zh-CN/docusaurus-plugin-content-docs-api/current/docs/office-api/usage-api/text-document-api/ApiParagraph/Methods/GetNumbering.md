# GetNumbering

返回编号列表的编号定义和编号级别。

## 语法

```javascript
expression.GetNumbering();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md)

## 示例

此示例展示如何获取编号列表的编号定义和编号级别。

```javascript editor-docx
// Get the numbering from the paragraph.

// How to get the numbering of the numbered text.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
let numbering1 = paragraph.GetNumbering();
numLvl = numbering.GetLevel(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a numbered list");
paragraph.SetNumbering(numLvl);
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
```
