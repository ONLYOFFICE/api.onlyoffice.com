# IsToggleToOff

Checks if field is toggle to off.

Inherited from [ApiCheckboxField.IsToggleToOff](../../ApiCheckboxField/Methods/IsToggleToOff.md).

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

