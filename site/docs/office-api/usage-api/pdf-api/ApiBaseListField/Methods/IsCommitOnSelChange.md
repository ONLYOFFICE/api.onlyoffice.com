# IsCommitOnSelChange

Checks if field can commit on selection change.

## Syntax

```javascript
expression.IsCommitOnSelChange();
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check if a dropdown field auto-submits when a selection changes in a PDF.

```javascript editor-pdf
// How do I determine if a field triggers submission on selection change in a PDF?

// Verify the auto-commit setting for a dropdown list in a PDF.

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
