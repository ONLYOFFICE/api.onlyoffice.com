# SetBackgroundColor

Sets the background color to the current form.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | The background color. |

## Returns

boolean

## Example

Apply a background color to a form field in a document.

```javascript editor-forms
// How do I fill a form field with a specific background color in a document?

// Color the background of a form field to make it visually distinct from surrounding text in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
