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

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Convert a date form to an inline form in a document.

```javascript editor-docx
// How do I change a fixed-size date form back to inline in a document?

// Switch a date form from fixed dimensions to flow naturally with surrounding text in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.ToFixed(10 * 240, 2 * 240);
let copyForm = dateForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
doc.Push(paragraph);
copyForm.ToInline();
let fixed = dateForm.IsFixed();
let fixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + fixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + fixedCopy);
doc.Push(paragraph);
```
