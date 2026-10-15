# ToFixed

Converts the current form to a fixed size form.

Inherited from [ApiFormBase.ToFixed](../../ApiFormBase/Methods/ToFixed.md).

## Syntax

```javascript
expression.ToFixed(width, height, keepPosition);
```

`expression` - A variable that represents an [ApiCheckBoxForm](../ApiCheckBoxForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape width measured in twentieths of a point (1/1440 of an inch). |
| height | Required | [twips](../../Enumeration/twips.md) |  | The wrapper shape height measured in twentieths of a point (1/1440 of an inch). |
| keepPosition | Required | boolean |  | Save position on the page (it can be a little bit slow, because it runs the document calculation). |

## Returns

boolean

## Example

Convert a checkbox form to a fixed-size form in a document.

```javascript editor-docx
// How do I lock the dimensions of a form field so it does not resize in a document?

// Prevent layout shifts by giving a checkbox form a precise fixed width and height in a document.

let doc = Api.GetDocument();
let checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
let paragraph = doc.GetElement(0);
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Married");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
paragraph.AddLineBreak();
checkBoxForm = Api.CreateCheckBoxForm({"key": "Marital status", "tip": "Specify your marital status", "required": true, "placeholder": "Marital status", "radio": true});
paragraph.AddElement(checkBoxForm);
paragraph.AddText(" Single");
checkBoxForm.ToFixed(2 * 240, 1 * 240);
let isFixed = checkBoxForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The second form from this document has a fixed size: " + isFixed);
doc.Push(paragraph);
```
