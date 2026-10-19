# SetTipText

Sets the tip text to the current form.

Inherited from [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md).

## Syntax

```javascript
expression.SetTipText(sText);
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | Tip text. |

## Returns

boolean

## Example

Set tooltip text on a date form in a document.

```javascript editor-docx
// How do I set a tooltip hint on a date form in a document?

// Guide users by displaying a helpful hint when they hover over a date form in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetTipText("Enter your date");
let tipText = dateForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
