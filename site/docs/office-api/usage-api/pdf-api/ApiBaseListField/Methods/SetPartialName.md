# SetPartialName

Sets new field partial name.

Inherited from [ApiBaseField.SetPartialName](../../ApiBaseField/Methods/SetPartialName.md).

## Example

This example sets field partial name and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```

