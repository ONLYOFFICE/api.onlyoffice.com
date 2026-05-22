# DateFormPrBase

Specific date form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| format | string | The date format, ex: mm.dd.yyyy |
| lang | string | The date language. Possible value for this parameter is a language identifier as defined by |

## Example

Create a date form with the specific date form properties.

```javascript editor-forms
// How to create a date form with its base properties.

// Create the base properties and apply them to the ApiDateForm object.

let dateFormPrBase = {
	"format": "mm.dd.yyyy",
	"lang": "en-US"
};
let dateForm = Api.CreateDateForm(dateFormPrBase);
```
