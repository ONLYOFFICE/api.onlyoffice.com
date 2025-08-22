# GetClassType

Returns a type of the ApiComplexForm class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"form"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-pdf
let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm();
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
let classType = complexForm.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
