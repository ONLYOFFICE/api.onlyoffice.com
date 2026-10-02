# SetRequired

Specifies if the current form should be required.

Inherited from [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md).

## Syntax

```javascript
expression.SetRequired(bRequired);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bRequired | Required | boolean |  | Defines if the current form is required (true) or not (false). |

## Returns

boolean

## Example

Mark a complex form as required in a document.

```javascript editor-forms
// How do I make a form field mandatory in a document?

// Enforce that a form must be completed before the document can be submitted.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetRequired(true);
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
```
