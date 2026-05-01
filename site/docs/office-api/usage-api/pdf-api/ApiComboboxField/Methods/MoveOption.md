# MoveOption

Moves option to specified position in list options.

Inherited from [ApiBaseListField.MoveOption](../../ApiBaseListField/Methods/MoveOption.md).

## Example

Move option in field with list of options in a PDF document.

```javascript editor-pdf
// How can I move option using a list field in a PDF document?

// Move option for a list field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOption(2, 0);
```
