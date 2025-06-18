# InsertTextForm

Inserts a text box with the specified text box properties over the selected text.

## Syntax

```javascript
expression.InsertTextForm(formPr);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| formPr | Required | [TextFormInsertPr](../../Enumeration/TextFormInsertPr.md) |  | Properties for inserting a text field. |

## Returns

[ApiTextForm](../../ApiTextForm/ApiTextForm.md)

## Example

This example inserts a text box with the specified text box properties over the selected text.

```javascript editor-pdf
// How to create a text form and add it to the paragraph.

// Add a text form to the ApiDocument object, set its properties like characters limit, autofit, etc.

let doc = editor.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First name");
paragraph.Select();
doc.InsertTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "Name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false, "placeholderFromSelection": true, "keepSelectedTextInForm": false});
```
