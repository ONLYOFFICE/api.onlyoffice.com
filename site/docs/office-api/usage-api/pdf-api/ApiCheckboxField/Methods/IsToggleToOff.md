# IsToggleToOff

Checks if field is toggle to off.

## Syntax

```javascript
expression.IsToggleToOff();
```

`expression` - A variable that represents a [ApiCheckboxField](../ApiCheckboxField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get toggle to off property of checkbox field in a PDF document.

```javascript editor-pdf
// How can I is toggle to off using a checkbox field in a PDF document?

// Is toggle to off for a checkbox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
