# SetNumPr

指定当前段落引用当前文档中的编号定义实例。

继承自 [ApiParaPr.SetNumPr](../../ApiParaPr/Methods/SetNumPr.md)。

## 示例

将编号定义附加到段落以使其成为文档中列表的一部分。

```javascript editor-docx
// How do I apply a bullet or numbered list style to a paragraph in a document?

// Format a paragraph as a bulleted list item using a shared numbering definition.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
let numbering = doc.CreateNumbering("bullet");
paraPr.SetNumPr(numbering);
for (let lvl = 0; lvl < 8; ++lvl) {
	let numLvl = numbering.GetLevel(lvl);
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("Default bullet lvl " + (lvl + 1));
	paragraph.SetNumbering(numLvl);
	paragraph.SetContextualSpacing(true);
	doc.Push(paragraph);
}
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph styled as a bulleted list.");
doc.Push(paragraph);
```
