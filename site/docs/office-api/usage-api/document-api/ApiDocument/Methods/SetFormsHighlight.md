# SetFormsHighlight

Sets the highlight to the forms in the document.

## Syntax

```javascript
expression.SetFormsHighlight(color);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The highlight color for the forms. |

## Returns

boolean

## Example

Apply a background highlight color to all form fields in a document.

```javascript editor-docx
// How do I highlight form fields with a custom color in a document?

// Draw attention to fillable areas by painting them with a distinct background color.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
doc.SetFormsHighlight(Api.HexColor('#FF6F3D'));
```
