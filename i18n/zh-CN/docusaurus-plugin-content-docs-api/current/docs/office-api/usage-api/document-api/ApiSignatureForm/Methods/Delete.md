# Delete

删除表单及其内容。

如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiSignatureForm](../ApiSignatureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

从文档中移除签名字段。

```javascript editor-docx
// How do I permanently delete a signature field in a document?

// Eliminate an unwanted signature field while keeping surrounding content intact in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original signature form: ');

const signatureForm = Api.CreateSignatureForm({
	'key': 'Signature',
	'tip': 'Please sign here',
	'placeholder': 'Signature',
});
paragraph.AddElement(signatureForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const signatureFormCopy = signatureForm.Copy();
paragraph.AddElement(signatureFormCopy);

signatureForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original signature form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
