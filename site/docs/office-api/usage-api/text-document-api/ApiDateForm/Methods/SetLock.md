# SetLock

Sets the lock state of the current form.

## Syntax

```javascript
expression.SetLock(isLock);
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isLock | Required | boolean |  | Specifies whether to lock the form (true) or unlock it (false). |

## Returns

boolean

## Example

This example specifies if the current form should be locked.

```javascript editor-docx
// How to lock a form.

// Make sure that the form cannot be edited.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetLock(true);
let locked = textForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is locked: " + locked);
doc.Push(paragraph);

```
