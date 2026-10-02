# Delete

删除表单及其内容。

如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiPictureForm](../ApiPictureForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

从文档中完全移除图片表单字段。

```javascript editor-forms
// How do I permanently delete a picture form field from a document?

// Discard an unwanted picture form while keeping other content intact in a document.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Original picture form: ');

const pictureForm = Api.CreatePictureForm({
	'key': 'Photo',
	'tip': 'Upload your photo',
	'placeholder': 'Photo',
});
pictureForm.SetImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	Api.MillimetersToEmus(50),
	Api.MillimetersToEmus(50)
);
paragraph.AddElement(pictureForm);

paragraph = Api.CreateParagraph();
paragraph.AddText('Copy of the form: ');
doc.Push(paragraph);

const pictureFormCopy = pictureForm.Copy();
paragraph.AddElement(pictureFormCopy);

pictureForm.Delete();

paragraph = Api.CreateParagraph();
paragraph.AddText('The original picture form has been deleted, but the copy remains.');
doc.Push(paragraph);
```
