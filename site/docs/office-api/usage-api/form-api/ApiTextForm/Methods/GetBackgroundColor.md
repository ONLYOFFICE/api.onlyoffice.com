# GetBackgroundColor

Returns the background color of the current form.

Inherited from [ApiFormBase.GetBackgroundColor](../../ApiFormBase/Methods/GetBackgroundColor.md).

## Syntax

```javascript
expression.GetBackgroundColor();
```

`expression` - A variable that represents an [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## Example

Read the background color applied to a text field in a document.

```javascript editor-forms
// How do I retrieve the fill color of a text entry area in a document?

// Inspect the color used behind a text field to verify its appearance in a document.

let doc = Api.GetDocument();

const textForm = Api.CreateTextForm({
	'key': 'Personal information',
	'tip': 'Enter your first name',
	'required': true,
	'placeholder': 'First name',
	'comb': true,
	'maxCharacters': 10,
	'cellWidth': 3,
	'multiLine': false,
	'autoFit': false
});

const themeColor = Api.ThemeColor('accent3');
textForm.SetBackgroundColor(themeColor);
const backgroundColor = textForm.GetBackgroundColor();

let paragraph = doc.GetElement(0);
paragraph.AddText('Is background color a theme color? -> ' + backgroundColor.IsThemeColor());
paragraph.AddLineBreak();
paragraph.AddText('Background color HEX (for current theme): ' + backgroundColor.GetHex());
paragraph.AddLineBreak();
paragraph.AddElement(textForm);
```
