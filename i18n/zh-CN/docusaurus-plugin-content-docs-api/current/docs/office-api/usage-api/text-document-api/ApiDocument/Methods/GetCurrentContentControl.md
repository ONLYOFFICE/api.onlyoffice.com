# GetCurrentContentControl

返回当前选中的内容控件。

继承自 [ApiDocumentContent.GetCurrentContentControl](../../ApiDocumentContent/Methods/GetCurrentContentControl.md)。

## 示例

获取文档中当前选中的内容控件。

```javascript editor-docx
// How to get current content control for a document content?

// Get current content control and display the result in a document.

const doc = Api.GetDocument();

const blockSdt = Api.CreateBlockLvlSdt();
blockSdt.GetContent().GetElement(0).AddText('Content inside the control.');
doc.AddElement(0, blockSdt);

blockSdt.Select();
const currentCC = doc.GetCurrentContentControl();

const paragraph = Api.CreateParagraph();
if (currentCC) {
	paragraph.AddText('Current content control class: ' + currentCC.GetClassType());
} else {
	paragraph.AddText('No content control is selected.');
}
doc.Push(paragraph);
```
