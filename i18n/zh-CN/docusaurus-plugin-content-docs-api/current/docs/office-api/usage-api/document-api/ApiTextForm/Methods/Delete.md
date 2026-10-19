# Delete

删除表单及其内容。

如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiTextForm](../ApiTextForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

从文档中完全移除文本输入字段。

```javascript editor-docx
// How do I permanently take out a text field while keeping its copy in a document?

// Erase a specific text entry field without affecting other fields in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original text form: ');

const textForm = Api.CreateTextForm({
	'key': 'Personal information',
	'tip': 'Enter your first name',
	'placeholder': 'First name',
});
paragraph.AddElement(textForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const textFormCopy = textForm.Copy();
paragraph.AddElement(textFormCopy);

textForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original text form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
