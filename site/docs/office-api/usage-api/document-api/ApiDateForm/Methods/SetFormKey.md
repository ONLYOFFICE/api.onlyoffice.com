# SetFormKey

Sets a key to the current form.

Inherited from [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md).

## Syntax

```javascript
expression.SetFormKey(sKey);
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKey | Required | string |  | Form key. |

## Returns

boolean

## Example

Assign an identifying key to a date form in a document.

```javascript editor-docx
// How do I set or update the key of a date form in a document?

// Rename a date form's key and confirm the new value is stored correctly in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetFormKey("Date form key");
let key = dateForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
