# FormData

Form data.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| key | string | The form key. If the current form is a radio button, then this field contains the group key. |
| tag | string | The form tag. |
| type | [FormSpecificType](../Enumeration/FormSpecificType.md) | The form type. |
| value | string \| boolean | The current field value. |


## Example

Specify the form data that can be used to create the form.

```javascript editor-pdf
// How to create a form data indicating its key and value.

// Create a data to add it to the form.

let formData = {key: "CompanyName", value: "OnlyOffice", type: "text"};
```
