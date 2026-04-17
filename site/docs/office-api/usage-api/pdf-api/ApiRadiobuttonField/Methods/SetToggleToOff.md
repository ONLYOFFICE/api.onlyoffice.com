# SetToggleToOff

Sets field toggle to off prop.

Inherited from [ApiCheckboxField.SetToggleToOff](../../ApiCheckboxField/Methods/SetToggleToOff.md).

## Example

This example sets toggle to off property for checkbox field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
```

