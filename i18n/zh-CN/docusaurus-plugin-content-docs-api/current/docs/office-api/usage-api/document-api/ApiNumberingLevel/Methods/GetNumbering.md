# GetNumbering

返回编号定义。

## 语法

```javascript
expression.GetNumbering();
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## 示例

检索文档中拥有给定列表级别的编号定义。

```javascript editor-docx
// How do I get the parent numbering definition from a numbering level in a document?

// Reuse an existing list definition to append more numbered items without creating a new list in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let numLvl1 = numbering.GetLevel(1);
numLvl1.SetRestart(false);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the first element of a child numbered list which starts with 'a'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the second element of a child numbered list which starts with 'b'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without a numbering. ");
paragraph.AddText("It can be inserted between the numbered elements.");
doc.Push(paragraph);
numbering = numLvl.GetNumbering();
let numLvl2 = numbering.GetLevel(numLvl.GetLevelIndex());
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a parent numbered list which starts with '2'");
paragraph.SetNumbering(numLvl2);
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
```
