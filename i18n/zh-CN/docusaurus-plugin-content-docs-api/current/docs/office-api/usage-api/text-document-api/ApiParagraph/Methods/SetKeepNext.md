# SetKeepNext

指定在使用分页视图呈现文档时，尽可能将当前段落的内容至少部分地与下一段落呈现在同一页上。

Inherited from [ApiParaPr.SetKeepNext](../../ApiParaPr/Methods/SetKeepNext.md).

## 示例

此示例指定在使用分页视图呈现文档时，尽可能将段落的内容至少部分地与下一段落呈现在同一页上。

```javascript editor-docx
// How to partly keep lines of the paragraph content.

// How to try to keep all lines of the paragraph on the same page.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetKeepNext(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of how the paragraph tries to keep together with the next paragraph. ");
paragraph.AddText("Scroll down to the second page to see it. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	paragraph.SetStyle(myStyle);
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
paragraph.AddText("The paragraph lines stay on the same page as the previous paragraph. ");
for (let i = 0; i < 10; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
doc.Push(paragraph);
```

