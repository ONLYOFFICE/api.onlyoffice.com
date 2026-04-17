# IsRequired

Checks if field is required

Inherited from [ApiBaseField.IsRequired](../../ApiBaseField/Methods/IsRequired.md).

## Example

This example gets field required and display's it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Required: ' + textField.IsRequired());
```

