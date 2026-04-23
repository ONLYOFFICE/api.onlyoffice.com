# GetParaPr

返回应用于引用给定编号定义和编号级别的任何编号段落的段落属性。

## 语法

```javascript
expression.GetParaPr();
```

`expression` - 表示 [ApiNumberingLevel](../ApiNumberingLevel.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## 示例

此示例展示如何获取应用于引用给定编号定义和编号级别的任何编号段落的段落属性。

```javascript editor-docx
// How to retrieve the paragraph properties.

// Get the properties of the paragraph of the numbering.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let paraPr = numLvl.GetParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
paraPr.SetIndFirstLine(720);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a parent numbered list which starts with '2'");
paragraph.SetNumbering(numLvl);
doc.Push(paragraph);
```
