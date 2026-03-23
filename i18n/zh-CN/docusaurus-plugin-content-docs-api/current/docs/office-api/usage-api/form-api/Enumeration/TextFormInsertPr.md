# TextFormInsertPr

用于插入文本字段的属性。

## 类型

枚举

## 值

- [FormPrBase](../Enumeration/FormPrBase.md)
- [TextFormPrBase](../Enumeration/TextFormPrBase.md)
- [FormInsertPr](../Enumeration/FormInsertPr.md)


## 示例

This example inserts a text box with the specified text box properties over the selected text.

```javascript editor-forms
// How to insert a text form with adding properties like tip text, placeholder, etc. to it.

// Add a text form with properties.

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
