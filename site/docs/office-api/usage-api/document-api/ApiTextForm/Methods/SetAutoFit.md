# SetAutoFit

Specifies if the text field content should be autofit, i.e. whether the font size adjusts to the size of the fixed size form.

## Syntax

```javascript
expression.SetAutoFit(bAutoFit);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAutoFit | Required | boolean |  | Defines if the text field content is autofit (true) or not (false). |

## Returns

boolean

## Example

Enable automatic resizing of a text field to fit its content in a document.

```javascript editor-docx
// How do I make a text field automatically adjust its size to match the entered text in a document?

// Keep a text field tidy by letting it expand or shrink to fit its content in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.ToFixed(6 * 240, 2 * 240);
textForm.SetAutoFit(true);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);
```
