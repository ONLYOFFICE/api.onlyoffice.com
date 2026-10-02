# GetTag

Returns the tag attribute for the current form.

Inherited from [ApiFormBase.GetTag](../../ApiFormBase/Methods/GetTag.md).

## Syntax

```javascript
expression.GetTag();
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the tag value attached to a complex form in a document.

```javascript editor-forms
// How do I retrieve the tag assigned to a form in a document?

// Use the tag to identify or group related forms when processing them programmatically in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1", "tag": "Custom tag"});
paragraph.AddElement(complexForm);
let tag = complexForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
