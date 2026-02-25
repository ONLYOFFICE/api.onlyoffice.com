# FormPrBase

Common form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | string | The form key. |
| placeholder | string | The form placeholder text. |
| required | boolean | Specifies if the form is required or not. |
| role | string | The role to fill out form. |
| tag | string | The form tag. |
| tip | string | The form tip text. |


## Example

This example creates a text form with the common form properties.

```javascript editor-pdf playground
// How to create a text form using its base properties.

// Create the base properties and apply them to the ApiTextForm object.

let formPrBase = {
	"key": "Personal information",
	"tip": "Enter your first name",
	"required": true,
	"placeholder": "First name"
};
let textForm = Api.CreateTextForm(formPrBase);

```
