# IsReadOnly

Checks if field is read only

Inherited from [ApiBaseField.IsReadOnly](../../ApiBaseField/Methods/IsReadOnly.md).

## Example

This example gets field read only and display's it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Read only is: ' + textField.IsReadOnly());
```

