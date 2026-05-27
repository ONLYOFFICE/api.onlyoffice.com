# GetTextPr

返回将应用于当前编号级别本身文本的文本属性，而不是后续段落中的文本。
💡 要更改段落的文本样式，必须使用 [ApiRun#SetStyle](../../ApiRun/Methods/SetStyle.md) 方法为其应用样式。

## 语法

```javascript
expression.GetTextPr();
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中为列表级别的编号标签应用文本格式。

```javascript editor-docx
// How do I change the font and size of a list level's numbering label in a document?

// Style the numbering marker itself with bold and a custom typeface without affecting the paragraph text in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let textPr = numLvl.GetTextPr();
textPr.SetBold(true);
textPr.SetFontFamily("Calibri");
textPr.SetFontSize(28);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a numbered list which starts with '2'");
doc.Push(paragraph);
```
