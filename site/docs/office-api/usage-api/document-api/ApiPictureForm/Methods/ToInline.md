# ToInline

Converts the current form to an inline form.

:::note
A picture form can't be converted to an inline form, as it's always a fixed-size object.
:::

Inherited from [ApiFormBase.ToInline](../../ApiFormBase/Methods/ToInline.md).

## Syntax

```javascript
expression.ToInline();
```

`expression` - A variable that represents an [ApiPictureForm](../ApiPictureForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Place a picture field inline with surrounding text in a document.

```javascript editor-docx
// How do I embed a picture field directly within a line of text rather than floating it in a document?

// Switch a picture field from a floating layout to one that flows with the text in a document.

let doc = Api.GetDocument();
let pictureForm = Api.CreatePictureForm({"key": "Personal information", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false, "shiftX": 50, "shiftY": 50});
pictureForm.SetImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", Api.MillimetersToEmus(70), Api.MillimetersToEmus(80));
let paragraph = doc.GetElement(0);
paragraph.AddElement(pictureForm);
pictureForm.SetTipText("Upload your photo");
let copyPictureForm = pictureForm.Copy();
copyPictureForm.ToInline();
let fixed = pictureForm.IsFixed();
let fixedCopy = copyPictureForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
doc.Push(paragraph);
```
