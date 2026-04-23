# GetAllNumberedParagraphs

从当前文档返回所有编号段落。

## 语法

```javascript
expression.GetAllNumberedParagraphs();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

此示例展示如何获取当前文档中的所有编号段落。

```javascript editor-docx
// Get all paragraphs with numbering added to the document.

// How to retrieve all paragraphs with numbering and make the first one bold.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let formatString = "";
	for (let tempLvl = 0; tempLvl <= lvl; ++tempLvl) formatString += "%" + tempLvl + ".";
	numLvl.SetCustomType("lowerRoman", formatString, "left");
	numLvl.SetStart(lvl + 1);
	numLvl.SetSuff("space");
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Custom numbered lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let numberedParagraphs = doc.GetAllNumberedParagraphs();
numberedParagraphs[0].SetBold(true);
```
