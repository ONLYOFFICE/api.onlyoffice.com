# GetFullName

Gets field full name.

Inherited from [ApiBaseField.GetFullName](../../ApiBaseField/Methods/GetFullName.md).

## Example

This example gets field full name and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Field full name is: ' + textField.GetFullName());
```

