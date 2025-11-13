# GetLabel

Returns a label of the ApiCheckBoxForm class.

## Syntax

```javascript
expression.GetLabel();
```

`expression` - A variable that represents a [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets a label and inserts it into the document.

```javascript editor-pdf
// Creates a paragraph, adds a checkbox label.

// How to get a label of an ApiCheckBoxForm object.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
checkBoxForm.SetLabel("Married");
let label = checkBoxForm.GetLabel();
let paragraph = doc.GetElement(0);
paragraph.AddElement(label);
```
