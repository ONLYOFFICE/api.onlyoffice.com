# SetCellWidth

Sets the cell width to the applied comb of characters.

## Syntax

```javascript
expression.SetCellWidth(nCellWidth);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCellWidth | Optional | [mm](../../Enumeration/mm.md) | 0 | The cell width measured in millimeters. If this parameter is not specified or equal to 0 or less, then the width will be set automatically. Must be \>= 1 and \<= 558.8. |

## Returns

boolean

## Example

Set the width of each character cell in a comb-style text field in a document.

```javascript editor-forms
// How do I control the width of individual character boxes in a text field in a document?

// Adjust character cell width to ensure uniform spacing across a comb text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
textForm.SetCellWidth(7);
```
