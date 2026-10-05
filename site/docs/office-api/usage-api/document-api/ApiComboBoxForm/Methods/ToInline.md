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

`expression` - A variable that represents an [ApiComboBoxForm](../ApiComboBoxForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Convert a combo box form to an inline form in a document.

```javascript editor-docx
// How do I change a combo box form to an inline form in a document?

// Switch a fixed-size combo box back to inline flow so it sits naturally within a paragraph in a document.

let doc = Api.GetDocument();
let comboBoxForm = Api.CreateComboBoxForm({"key": "Personal information", "tip": "Choose your country", "required": true, "placeholder": "Country", "editable": false, "autoFit": false, "items": ["Latvia", "USA", "UK"]});
let paragraph = doc.GetElement(0);
paragraph.AddElement(comboBoxForm);
comboBoxForm.ToFixed(7 * 240, 2 * 240);
let copyForm = comboBoxForm.Copy();
paragraph = Api.CreateParagraph();
paragraph.AddElement(copyForm);
doc.Push(paragraph);
copyForm.ToInline();
let isFixed = comboBoxForm.IsFixed();
let isFixedCopy = copyForm.IsFixed();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document has a fixed size: " + isFixed);
paragraph.AddLineBreak();
paragraph.AddText("The second form from this document has a fixed size: " + isFixedCopy);
doc.Push(paragraph);
```
