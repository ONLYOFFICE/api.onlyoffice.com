# GetValue

Gets field value

Inherited from [ApiBaseField.GetValue](../../ApiBaseField/Methods/GetValue.md).

## Example

This example gets value from first text field and sets to second text field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField1 = Api.CreateTextField([10, 10, 160, 30]);
let textField2 = Api.CreateTextField([10, 40, 160, 60]);

page.AddObject(textField1);
page.AddObject(textField2);

textField1.SetValue('Name Surname');
textField2.SetValue(textField1.GetValue());
```

