# MoveOption

Moves option to specified position in list options.

Inherited from [ApiBaseListField.MoveOption](../../ApiBaseListField/Methods/MoveOption.md).

## Example

Reorder choices in a dropdown field in a PDF.

```javascript editor-pdf
// How do I rearrange the order of options in a dropdown in a PDF?

// Change the position of an item in a list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.MoveOption(2, 0);
```
