# SetBorderColor

Sets the border color to the current form.

Inherited from [ApiFormBase.SetBorderColor](../../ApiFormBase/Methods/SetBorderColor.md).

## Syntax

```javascript
expression.SetBorderColor(color);
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../../document-api/ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Set a border color on a date form in a document.

```javascript editor-forms
// How do I change the border color of a date form in a document?

// Highlight a date form with a colored outline to draw attention to it in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBorderColor(Api.HexColor('#FF6F3D'));
```
