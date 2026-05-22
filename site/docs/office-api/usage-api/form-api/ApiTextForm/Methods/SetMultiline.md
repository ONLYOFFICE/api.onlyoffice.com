# SetMultiline

Specifies if the current text field should be miltiline.

## Syntax

```javascript
expression.SetMultiline(bMultiline);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMultiline | Required | boolean |  | Defines if the current text field is multiline (true) or not (false). |

## Returns

boolean

## Example

Allow a text field to span multiple lines in a document.

```javascript editor-forms
// How do I enable a text field to accept line breaks and wrap across multiple rows in a document?

// Expand a text field so users can enter longer responses across several lines in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(3 * 240, 3 * 240);
textForm.SetMultiline(true);
let multiline = textForm.IsMultiline();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is multiline: " + multiline);
doc.Push(paragraph);
```
