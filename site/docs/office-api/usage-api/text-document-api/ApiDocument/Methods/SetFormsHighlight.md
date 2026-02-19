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
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets the highlight to the forms in the document.

```javascript editor-docx
// How to set color for forms background.

// Highlight the forms color.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
doc.SetFormsHighlight(255, 111, 61);
```
