# DateFormPrBase

Specific date form properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| format | string | The date format, ex: mm.dd.yyyy |
| lang | string | The date language. Possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". |


## Example

This example creates a date form with the specific date form properties.

```javascript editor-pdf
// How to create a date form with its base properties.

// Create the base properties and apply them to the ApiDateForm object.

let dateFormPrBase = {"format": "mm.dd.yyyy", "lang": "en-US"};
let dateForm = Api.CreateDateForm(dateFormPrBase);
```
