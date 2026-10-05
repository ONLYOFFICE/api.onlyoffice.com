# SetBorderColor

Sets the border color to the current form.

Inherited from [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md).

## Syntax

```javascript
expression.SetBorderColor(color);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Set the border color of a complex form in a document.

```javascript editor-docx
// How do I change the border color of a form in a document?

// Apply a custom border color to a form to highlight it within the document.

let doc = Api.GetDocument();
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(complexForm);
complexForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
