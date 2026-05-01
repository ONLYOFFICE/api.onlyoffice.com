# SetWidowControl

指定在显示时是否通过将当前段落的单独一行移动到下一页来使其与其余内容显示在不同的页面上。

继承自 [ApiParaPr.SetWidowControl](../../ApiParaPr/Methods/SetWidowControl.md)。

## 示例

指定在显示时是否将当前段落的单行通过移至下一页的方式显示在与其余内容不同的页面上。

```javascript editor-docx
// Set the window control of the paragraph in a document.

// Make the last line to be displayed on the next page, by setting widow control method set to 'true'.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetWidowControl(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("The single line of the last paragraph on this page will be prevented from being displayed on a separate page. ");
for (let x = 0; x < 5; ++x) {
	paragraph = Api.CreateParagraph();
	for (let i = 0; i < 10; ++i) {
		paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
	}
	doc.Push(paragraph);
}
paragraph = Api.CreateParagraph();
for (let i = 0; i < 3; ++i) {
	paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
}
paragraph.SetStyle(myStyle);
paragraph.AddText("This last line would be displayed on the next page, if we had not used the set widow control method.");
doc.Push(paragraph);
```
