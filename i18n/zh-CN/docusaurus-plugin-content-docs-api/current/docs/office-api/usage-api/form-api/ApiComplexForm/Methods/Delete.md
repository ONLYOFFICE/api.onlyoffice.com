# Delete

删除表单及其内容。

如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiComplexForm](../ApiComplexForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

从文档中删除复合表单。

```javascript editor-forms
// How do I remove a complex form from a document?

// Eliminate an unwanted form while keeping any copies that were made beforehand.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original complex form: ');

const complexForm = Api.CreateComplexForm({
	'key': 'Complex form',
	'tip': 'Enter data',
	'placeholder': 'Complex form'
});
paragraph.AddElement(complexForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const complexFormCopy = complexForm.Copy();
paragraph.AddElement(complexFormCopy);

complexForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original complex form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
