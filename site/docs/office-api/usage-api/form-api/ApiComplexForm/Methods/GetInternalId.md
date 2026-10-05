# GetInternalId

Returns an internal id of the current form.

Inherited from [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md).

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the internal identifier of a complex form in a document.

```javascript editor-forms
// How do I retrieve the internal ID assigned to a form in a document?

// Track or reference a specific form programmatically using its unique internal ID in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex", "tip": "Insert here other forms"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let internalId = complexForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
