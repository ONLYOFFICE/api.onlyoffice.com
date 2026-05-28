# CreateComplexForm

Creates a complex form with the specified complex form properties.

## Syntax

```javascript
expression.CreateComplexForm(formPr);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | Required | [FormPrBase](../../Enumeration/FormPrBase.md) |  | Complex form properties. |

## Returns

[ApiComplexForm](../../ApiComplexForm/ApiComplexForm.md)

## Example

Combine multiple input fields into a single complex form field in a document.

```javascript editor-forms
// How do I create a form field that contains multiple parts in a document?

// Build a composite field that allows users to enter different types of data together in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({
	"key": "Email",
	"tip": "Email",
	"placeholder": "Start to fill complex form"
});
complexForm.Add(Api.CreateTextForm());
complexForm.Add("@onlyoffice.com");
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
