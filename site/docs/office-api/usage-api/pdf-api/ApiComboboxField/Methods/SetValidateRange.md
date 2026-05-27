# SetValidateRange

Sets validate range for field.
💡  Can only be applied to fields with a percentage or number format. 

## Syntax

```javascript
expression.SetValidateRange(greaterThan, greaterThanValue, lessThan, lessThanValue);
```

`expression` - A variable that represents a [ApiComboboxField](../ApiComboboxField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| greaterThan | Optional | boolean | false | If true, enables minimum value validation using `greaterThanValue`. |
| greaterThanValue | Required | number |  | The minimum allowed value. |
| lessThan | Optional | boolean | false | If true, enables maximum value validation using `lessThanValue`. |
| lessThanValue | Required | number |  | The maximum allowed value. |

## Returns

boolean

## Example

Limit field values to a numeric range in a PDF.

```javascript editor-pdf
// Can I restrict numbers to a minimum and maximum in a PDF?

// Accept only numbers within specified bounds in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValidateRange(true, 0, true, 5);
comboboxField.SetValue('10');
```
