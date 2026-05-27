# SetCommitOnSelChange

Sets whether the field commits changes immediately after selection changes.

## Syntax

```javascript
expression.SetCommitOnSelChange(commitOnSelectionChange);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| commitOnSelectionChange | Required | boolean |  | Specifies whether selection changes are committed immediately. |

## Returns

boolean

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
