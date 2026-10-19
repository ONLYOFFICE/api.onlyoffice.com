# Delete

删除表单及其内容。

如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiComboBoxForm](../ApiComboBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

从文档中移除组合框表单字段。

```javascript editor-docx
// How do I permanently delete a combo box form field in a document?

// Keep a copy of a form field and delete the original to leave only the duplicate in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original combo box form: ');

const comboBoxForm = Api.CreateComboBoxForm({
	'key': 'Personal information',
	'tip': 'Choose your country',
	'placeholder': 'Country',
	'editable': false,
	'autoFit': false,
	'items': ['Latvia', 'USA', 'UK']
});
paragraph.AddElement(comboBoxForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const comboBoxFormCopy = comboBoxForm.Copy();
paragraph.AddElement(comboBoxFormCopy);

comboBoxForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original combo box form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
