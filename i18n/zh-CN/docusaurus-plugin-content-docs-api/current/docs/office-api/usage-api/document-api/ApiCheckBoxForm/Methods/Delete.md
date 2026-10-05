# Delete

删除表单及其内容。

如果 keepContent 为 true，则不删除内容。

继承自 [ApiFormBase.Delete](../../ApiFormBase/Methods/Delete.md)。

## 语法

```javascript
expression.Delete(keepContent);
```

`expression` - 表示 [ApiCheckBoxForm](../ApiCheckBoxForm.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| keepContent | 必需 | boolean |  | 指定是否删除内容。 |

## 返回值

boolean

## 示例

从文档中移除复选框表单字段。

```javascript editor-docx
// How do I permanently delete a checkbox from the document in a document?

// Clean up a form by removing an unwanted radio button after it is no longer needed in a document.

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
