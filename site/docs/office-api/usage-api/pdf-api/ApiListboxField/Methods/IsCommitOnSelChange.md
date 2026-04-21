# IsCommitOnSelChange

Checks if field can commit on selection change.

Inherited from [ApiBaseListField.IsCommitOnSelChange](../../ApiBaseListField/Methods/IsCommitOnSelChange.md).

## Example

Get commit on selection change prop from field with list of options in a PDF document.

```javascript editor-pdf
// How can I is commit on sel change using a list field in a PDF document?

// Is commit on sel change for a list field in a PDF document.

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
