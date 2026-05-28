# SetReadOnly

Sets field read only

Inherited from [ApiBaseField.SetReadOnly](../../ApiBaseField/Methods/SetReadOnly.md).

## Example

Lock a form field to prevent editing in a PDF.

```javascript editor-pdf
// How do I make a form field read-only in a PDF?

// Disable editing on a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
