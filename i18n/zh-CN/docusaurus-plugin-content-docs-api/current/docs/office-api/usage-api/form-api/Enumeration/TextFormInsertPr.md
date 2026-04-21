# TextFormInsertPr

用于插入文本字段的属性。

## 类型

枚举

## 值

- [FormPrBase](../Enumeration/FormPrBase.md)
- [TextFormPrBase](../Enumeration/TextFormPrBase.md)
- [FormInsertPr](../Enumeration/FormInsertPr.md)

## 示例

在选定文本上方插入具有指定文本框属性的文本框。

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
