# SetTag

为当前表单设置标签属性。

继承自 [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md)。

## 示例

用自定义标识符标记文档中的表单字段。

```javascript editor-forms
// How do I attach a label or identifier to a form field in a document?

// Organize or reference form fields programmatically using custom tags.

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
