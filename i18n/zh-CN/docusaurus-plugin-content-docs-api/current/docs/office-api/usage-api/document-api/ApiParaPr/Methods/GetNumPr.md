# GetNumPr

返回当前段落的编号级别，引用当前文档中的编号定义实例。

## 语法

```javascript
expression.GetNumPr();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiNumberingLevel](../../ApiNumberingLevel/ApiNumberingLevel.md) \| undefined

## 示例

检索文档中项目符号段落的编号属性。

```javascript editor-docx
// How do I read the numbering settings assigned to a paragraph in a document?

// Confirm which list level is active by checking the class type of the numbering properties in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
let numLvl = numbering.GetLevel(0);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is a bulleted paragraph.");
let paraPr = paragraph.GetParaPr();
let numPr = paraPr.GetNumPr();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Numbering class type: " + (numPr ? numPr.GetClassType() : "none"));
doc.Push(paragraph2);
```
