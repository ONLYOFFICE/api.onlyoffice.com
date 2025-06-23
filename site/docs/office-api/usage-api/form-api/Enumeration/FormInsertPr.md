# FormInsertPr

Form insertion specific properties.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| keepSelectedTextInForm | boolean | Specifies if the currently selected text should be saved as the content of the inserted form. |
| placeholderFromSelection | boolean | Specifies if the currently selected text should be saved as a placeholder of the inserted form. |


## Example

This example inserts a text box with the specified text box properties over the selected text.

```javascript editor-pdf
// How to create a text form with its properties and insert it into the ApiDocument object.

// Create the ApiTextForm object and insert it into the document using the specified properties.

let textFormInsertPr = {"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false};
doc.InsertTextForm(textFormInsertPr);
```
