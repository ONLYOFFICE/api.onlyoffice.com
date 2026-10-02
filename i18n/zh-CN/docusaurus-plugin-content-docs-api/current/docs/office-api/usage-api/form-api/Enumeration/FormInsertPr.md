# FormInsertPr

表单插入特定属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| keepSelectedTextInForm | boolean | 指定当前选定的文本是否应保存为插入表单的内容。 |
| placeholderFromSelection | boolean | 指定当前选定的文本是否应保存为插入表单的占位符。 |

## 示例

插入文本表单时使用所选文本作为占位符。

```javascript editor-forms
// How do I create a text form with its properties and insert it into a document?

// Create the ApiTextForm object and insert it into the document using the specified properties.

let textFormInsertPr = {
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "Name",
	"comb": true,
	"maxCharacters": 10,
	"cellWidth": 3,
	"multiLine": false,
	"autoFit": false,
	"placeholderFromSelection": true,
	"keepSelectedTextInForm": false
};
doc.InsertTextForm(textFormInsertPr);
```
