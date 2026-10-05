# ToFixed

Converts the current form to a fixed size form.

Inherited from [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md).

## Syntax

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape width measured in twentieths of a point (1/1440 of an inch). |
| height | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape height measured in twentieths of a point (1/1440 of an inch). |
| keepPosition | Required | boolean |  | Save position on the page (it can be a little bit slow, because it runs the document calculation). |

## Returns

boolean

## Example

Convert a complex form to a fixed size in a document.

```javascript editor-forms
// How do I set a fixed size for a complex form in a document?

// Lock the dimensions of a form so it no longer resizes to fit its content in a document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.ToFixed(7 * 240, 2 * 240);
```
