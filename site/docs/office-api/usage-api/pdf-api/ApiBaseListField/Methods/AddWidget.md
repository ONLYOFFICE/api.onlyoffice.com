# AddWidget

Adds new widget - visual representation for field

Inherited from [ApiBaseField.AddWidget](../../ApiBaseField/Methods/AddWidget.md).

## Example

This example adds new widget - visual representation for field

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
```

