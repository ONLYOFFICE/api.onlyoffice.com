# SetNumPr

指定当前段落引用当前文档中的编号定义实例。

Inherited from [ApiParaPr.SetNumPr](../../ApiParaPr/Methods/SetNumPr.md).

## 示例

此示例指定当前段落引用当前文档中的编号定义实例。

```javascript editor-docx
// How to add numbering to the paragraph.

// Make the paragraph bulleted.

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

