# Delete

删除表单及其内容。

如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiDateForm](../ApiDateForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

从文档中删除日期表单字段。

```javascript editor-forms
// How do I remove a date form from a document?

// Keep only a copied version of a date field by deleting the original form in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original date form: ');

const dateForm = Api.CreateDateForm({
	'key': 'Birth date',
	'tip': 'Enter your birth date',
	'placeholder': 'Date',
	'format': 'dd.MM.yyyy',
	'lang': 'en-US'
});
paragraph.AddElement(dateForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const dateFormCopy = dateForm.Copy();
paragraph.AddElement(dateFormCopy);

dateForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original date form has been deleted, but the copy remains');
doc.Push(paragraph);
```
