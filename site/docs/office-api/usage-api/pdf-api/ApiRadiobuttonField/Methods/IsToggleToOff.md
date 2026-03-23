# IsToggleToOff

Checks if field is toggle to off.

## Syntax

```javascript
expression.IsToggleToOff();
```

`expression` - A variable that represents a [ApiRadiobuttonField](../ApiRadiobuttonField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example gets toggle to off property of checkbox field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
