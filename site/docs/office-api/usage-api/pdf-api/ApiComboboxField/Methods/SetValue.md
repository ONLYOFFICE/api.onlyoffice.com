# SetValue

Sets field value

Inherited from [ApiBaseField.SetValue](../../ApiBaseField/Methods/SetValue.md).

## Example

This example sets value to text field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Name Surname');
```

