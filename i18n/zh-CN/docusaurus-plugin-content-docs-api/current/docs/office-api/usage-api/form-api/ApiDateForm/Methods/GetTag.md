# GetTag

返回当前表单的标签属性。

继承自 [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md)。

## 示例

获取文档中表单元素的标签。

```javascript editor-forms
// How to get the tag for a form base?

// Get the tag and display the result in a document.

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
