# IsRequired

Checks if field is required

Inherited from [ApiBaseField.IsRequired](../../ApiBaseField/Methods/IsRequired.md).

## Example

Get field required and display's it in a PDF document.

```javascript editor-pdf
// How can I is required using a base field in a PDF document?

// Is required for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Required: ' + textField.IsRequired());
```
