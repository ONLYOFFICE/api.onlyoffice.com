# SetFullName

Sets new field name if possible.

Inherited from [ApiBaseField.SetFullName](../../ApiBaseField/Methods/SetFullName.md).

## Example

This example sets field full name and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('EXAMPLE');
textField.SetValue('Field full name is: ' + textField.GetFullName());
```

