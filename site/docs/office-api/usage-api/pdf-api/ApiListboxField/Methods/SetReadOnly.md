# SetReadOnly

Sets field read only

Inherited from [ApiBaseField.SetReadOnly](../../ApiBaseField/Methods/SetReadOnly.md).

## Example

This example sets field read only.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());
```

