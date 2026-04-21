# SetTag

为当前表单设置标签属性。

继承自 [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md)。

## 示例

设置文档中表单元素的标签。

```javascript editor-docx
// How to set tag for a form base?

// Set tag and display the result in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const textForm = Api.CreateTextForm({
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false
});
textForm.SetTag('MY_TAG');
paragraph.AddElement(textForm);

const formTag = textForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + formTag);
doc.Push(paragraph);
```
