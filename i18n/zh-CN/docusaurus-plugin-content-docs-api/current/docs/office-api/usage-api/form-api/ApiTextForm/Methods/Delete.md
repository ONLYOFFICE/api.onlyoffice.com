# Delete

删除表单及其内容。如果 keepContent 为 true，则不删除内容。

Inherited from [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md).

## 示例

此示例展示如何删除复选框表单。

```javascript editor-forms
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

