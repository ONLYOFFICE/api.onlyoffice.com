# SetKeepLines

指定在使用页面视图呈现文档时，尽可能将当前段落的所有行保持在同一页上。

继承自 [ApiParaPr.SetKeepLines](../../ApiParaPr/Methods/SetKeepLines.md)。

## 示例

防止文档中的段落跨页拆分。

```javascript editor-docx
// How do I keep all lines of a paragraph together on one page in a document?

// Ensure that long paragraphs always start on a new page rather than breaking mid-content.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetKeepLines(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep lines together. ");
paragraph.AddText("Scroll down to the second page to see it.");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines are moved to the next page to keep them together. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetStyle(myStyle);
doc.Push(paragraph);
```
