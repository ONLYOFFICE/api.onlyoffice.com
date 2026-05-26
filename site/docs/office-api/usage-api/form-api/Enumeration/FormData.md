# FormData

Form data.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| format | string | The date format string (e.g. **MM/DD/YYYY**). Present only for date picker fields. |
| key | string | The form key. If the current form is a radio button, then this field contains the group key. |
| label | string | The checkbox label. Present only for checkbox fields. |
| lang | string | The date language/locale name (e.g. **en-US**). Present only for date picker fields. |
| options | [ChoiceOption](../Enumeration/ChoiceOption.md)[] \| [CheckboxOption](../Enumeration/CheckboxOption.md)[] | The list of available options for the field. |
| role | string | The form role. |
| roleColor | string | The form role color in hex format. |
| tag | string | The form tag. |
| type | [FormSpecificType](../Enumeration/FormSpecificType.md) | The form type. |
| value | string \| boolean | The current field value. |

## Example

Specify the form data that can be used to create the form.

```javascript editor-forms
// How to create a form data indicating its key and value.

// Create a data to add it to the form.

let formData = {
	key: "CompanyName",
	value: "OnlyOffice",
	type: "text"
};
```
