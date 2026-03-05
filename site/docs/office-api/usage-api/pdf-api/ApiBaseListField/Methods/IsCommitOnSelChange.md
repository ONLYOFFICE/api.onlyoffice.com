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

This example gets commit on selection change prop from field with list of options.

```javascript editor-pdf
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
