# GetTextPr

Returns the text properties from the current form.

:::note
Used if possible for this type of form.
:::

Inherited from [ApiFormBase.GetTextPr](../../ApiFormBase/Methods/GetTextPr.md).

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../../document-api/ApiTextPr/ApiTextPr.md)

## Example

Access the text formatting properties of a complex form in a document.

```javascript editor-forms
// How do I get the text properties of a form so I can change its style in a document?

// Apply bold or resize text by first obtaining the form's text properties object in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let textPr = complexForm.GetTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
```
