# SetValidateRange

Sets validate range for field.
💡  Can only be applied to fields with a percentage or number format. 

## Syntax

```javascript
expression.SetValidateRange(greaterThan, greaterThanValue, lessThan, lessThanValue);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

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

Set value limits for a text field in a PDF.

```javascript editor-pdf
// How do I restrict what numbers can be entered in a text field in a PDF?

// Define the minimum and maximum allowed values for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValidateRange(true, 0, true, 5);
textField.SetValue('10');
```
