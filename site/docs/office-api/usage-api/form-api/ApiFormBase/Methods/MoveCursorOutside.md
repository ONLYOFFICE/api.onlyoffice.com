# MoveCursorOutside

Places a cursor before/after the current form.

## Syntax

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | Optional | boolean | true | Specifies whether a cursor will be placed before (false) or after (true) the current form. |

## Returns

boolean

## Example

Move the cursor to a position outside a form field in a document.

```javascript editor-forms
// How do I place the cursor right after a form field to continue typing in a document?

// Shift focus out of a completed form field so the next input lands in the surrounding text in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("The cursor will be placed after the current form.");
textForm.MoveCursorOutside(true);
```
