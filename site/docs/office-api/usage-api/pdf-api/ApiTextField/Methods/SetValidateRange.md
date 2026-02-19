# SetValidateRange

Sets validate range for field.\
💡  Can only be applied to fields with a percentage or number format. 

## Syntax

```javascript
expression.SetValidateRange(bGreaterThan, nGreaterThan, bLessThan, nLessThan);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bGreaterThan | Optional | boolean | false | If true, enables minimum value check using `nGreaterThan`. |
| nGreaterThan | Required | number |  | Minimum allowed value (inclusive or exclusive based on implementation). |
| bLessThan | Optional | boolean | false | If true, enables maximum value check using `nLessThan`. |
| nLessThan | Required | number |  | Maximum allowed value (inclusive or exclusive based on implementation). |

## Returns

boolean

## Example

This example gets text field and sets validate range for it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValidateRange(true, 0, true, 5);
textField.SetValue('10');

```
