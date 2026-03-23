# FormSpecificType

特定的表单类型。

## 类型

枚举

## 值

- "text"
- "checkBox"
- "picture"
- "comboBox"
- "dropDownList"
- "dateTime"
- "radio"
- "complex"
- "signature"


## 示例

Set the "text" form type to the first form of the current document.

```javascript editor-forms
// How to specify the form type.

// Create the form data with the "text" form type and set it to the first form in the document.

const formSpecificType = "text";
const formData = {
	"key": "CompanyName",
	"value": "ONLYOFFICE",
	"type": formSpecificType
};
doc.SetFormsData([formData]);

```
