# SetCheckBoxChecked

Sets the checkbox value for the content control.
This method updates the checkbox state of the content control to either checked or unchecked.

## Syntax

```javascript
expression.SetCheckBoxChecked(isChecked);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isChecked | Required | boolean |  | The state to set for the checkbox. `true` for checked, `false` for unchecked. |

## Returns

boolean

## Example

Mark a checkbox content control as checked in a document.

```javascript editor-docx
// How do I programmatically check or uncheck a checkbox control in a document?

// Pre-fill a form by setting a checkbox to its checked state before the user opens it in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
inlineControl.SetCheckBoxChecked(true);
```
