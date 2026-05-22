# Delete

删除表单及其内容。如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 示例

从文档中删除表单字段。

```javascript editor-forms
// How do I delete a form field in a document?

// Clean up a document by removing one of several inserted checkbox forms.

const doc = Api.GetDocument();
const checkBoxForm = Api.CreateCheckBoxForm({
	'key': 'Marital status',
	'tip': 'Specify your marital status',
	'placeholder': 'Marital status',
	'radio': true
});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(' Married');
let copyCheckBoxForm = checkBoxForm.Copy();
paragraph.AddLineBreak();
paragraph.AddElement(copyCheckBoxForm);
paragraph.AddText(' Single');
checkBoxForm.Delete();
```
