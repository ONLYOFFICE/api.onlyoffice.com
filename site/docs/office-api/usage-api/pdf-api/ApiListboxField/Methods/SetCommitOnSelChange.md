# SetCommitOnSelChange

Sets whether the field commits changes immediately after selection changes.

Inherited from [ApiBaseListField.SetCommitOnSelChange](../../ApiBaseListField/Methods/SetCommitOnSelChange.md).

## Example

Enable auto-submission when a dropdown selection changes in a PDF.

```javascript editor-pdf
// How do I make a field auto-submit when the selection changes in a PDF?

// Configure a dropdown to trigger form submission on selection in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
comboboxField.SetCommitOnSelChange(true);
comboboxField.SetValue('Commit on sel change is: ' + comboboxField.IsCommitOnSelChange());
```
