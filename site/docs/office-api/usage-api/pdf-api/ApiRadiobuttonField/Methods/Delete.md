# Delete

Removes field from document.

Inherited from [ApiBaseField.Delete](../../ApiBaseField/Methods/Delete.md).

## Example

This example removes the field from document.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
textField.Delete();
```

