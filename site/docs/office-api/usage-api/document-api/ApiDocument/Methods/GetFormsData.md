# GetFormsData

Returns the data from all forms present in the current document.
If a form was created and not assigned to any part of the document, it won't appear in this list.

## Syntax

```javascript
expression.GetFormsData();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FormData](../../Enumeration/FormData.md)[]

## Example

Collect the current values of all forms in a document.

```javascript editor-docx
// How do I export form field data as a JSON string in a document?

// Verify filled-in form values by printing them as text at the end of a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
let checkBox = Api.CreateCheckBoxForm({key: "BestCompany"});
checkBox.SetChecked(true);
paragraph1.Push(checkBox);
let textForm = Api.CreateTextForm({key: "CompanyName"});
textForm.SetText("OnlyOffice");
paragraph1.Push(textForm);

let text = JSON.stringify(doc.GetFormsData());
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText(text);
doc.Push(paragraph2);
```
