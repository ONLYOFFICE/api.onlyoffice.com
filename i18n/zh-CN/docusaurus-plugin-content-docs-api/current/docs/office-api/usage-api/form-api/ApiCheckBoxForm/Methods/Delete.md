# Delete

删除表单及其内容。如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 示例

删除文档中的复选框表单。

```javascript editor-forms
// How can I delete using a form base in a document?

// Delete for a form base in a document.

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
