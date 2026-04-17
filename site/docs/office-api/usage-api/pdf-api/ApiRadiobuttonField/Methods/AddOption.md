# AddOption

Adds options to checkbox group.

Inherited from [ApiCheckboxField.AddOption](../../ApiCheckboxField/Methods/AddOption.md).

## Example

This example adds an option for checkbox field group.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.AddOption(0, [10, 30, 25, 45], 'Choice 2');
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```

