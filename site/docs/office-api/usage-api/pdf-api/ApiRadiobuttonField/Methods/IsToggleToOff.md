# IsToggleToOff

Checks if field is toggle to off.

Inherited from [ApiCheckboxField.IsToggleToOff](../../ApiCheckboxField/Methods/IsToggleToOff.md).

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
