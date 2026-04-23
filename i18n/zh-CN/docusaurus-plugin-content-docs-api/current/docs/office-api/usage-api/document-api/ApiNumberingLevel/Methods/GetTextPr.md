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

此示例展示如何获取将应用于编号级别本身文本的文本属性，而不是后续段落中的文本。

```javascript editor-docx
// How to retrieve the text properties of the numbering.

// Update text properties of the numbering.

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
