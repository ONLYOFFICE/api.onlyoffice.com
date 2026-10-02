# SetBackgroundColor

Sets the background color to the current form.

Inherited from [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md).

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | The background color. |

## Returns

boolean

## Example

Set a background color on a date form in a document.

```javascript editor-docx
// How do I apply a custom background color to a date form in a document?

// Give a date form a distinctive fill color to make it stand out visually in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
