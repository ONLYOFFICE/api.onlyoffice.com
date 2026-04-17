# SetRequired

Sets field required

Inherited from [ApiBaseField.SetRequired](../../ApiBaseField/Methods/SetRequired.md).

## Example

This example sets field required.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());
```

