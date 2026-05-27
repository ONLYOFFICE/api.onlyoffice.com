# SetComb

Specifies if the text field should be a comb of characters with the same cell width.
The maximum number of characters must be set to a positive value.

## Syntax

```javascript
expression.SetComb(bComb);
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bComb | Required | boolean |  | Defines if the text field is a comb of characters (true) or not (false). |

## Returns

boolean

## Example

Divide a text field into equal-width character boxes in a document.

```javascript editor-forms
// How do I split a text field into evenly spaced individual character cells in a document?

// Give a text field a structured grid appearance by enabling its comb layout in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetComb(true);
let comb = textForm.IsComb();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is comb: " + comb);
doc.Push(paragraph);
```
