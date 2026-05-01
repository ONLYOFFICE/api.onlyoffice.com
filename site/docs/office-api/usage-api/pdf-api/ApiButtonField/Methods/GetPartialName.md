# GetPartialName

Gets field partial name.

Inherited from [ApiBaseField.GetPartialName](../../ApiBaseField/Methods/GetPartialName.md).

## Example

Get field partial name and display it in a PDF document.

```javascript editor-pdf
// How to get the partial name for a base field in a PDF document?

// Get the partial name and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
