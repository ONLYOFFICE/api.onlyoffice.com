# MoveOption

Moves option to specified position in list options.

## Syntax

```javascript
expression.MoveOption(nCurPos, nNewPos);
```

`expression` - A variable that represents a [ApiBaseListField](../ApiBaseListField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCurPos | Required | number |  | index of moved option |
| nNewPos | Required | number |  | new positon for option |

## Returns

boolean

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
