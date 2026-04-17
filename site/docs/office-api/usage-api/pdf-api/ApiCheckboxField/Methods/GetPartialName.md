# GetPartialName

Gets field partial name.

Inherited from [ApiBaseField.GetPartialName](../../ApiBaseField/Methods/GetPartialName.md).

## Example

This example gets field partial name and displays it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```

