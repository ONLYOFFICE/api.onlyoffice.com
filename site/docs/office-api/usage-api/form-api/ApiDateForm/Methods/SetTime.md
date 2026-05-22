# SetTime

Sets the timestamp to the current form.

## Syntax

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - A variable that represents a [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | number |  | The timestamp that will be set to the current date form. |

## Returns

boolean

## Example

Set a timestamp value on a date form in a document.

```javascript editor-forms
// How do I set the current date and time on a date form in a document?

// Pre-fill a date form with a specific point in time to reflect today's date in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetTime(new Date().getTime());
let timeStamp = dateForm.GetTime();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first date form from this document has setted time: " + new Date(timeStamp));
doc.Push(paragraph);
```
