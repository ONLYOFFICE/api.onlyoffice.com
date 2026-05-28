# SetTextPr

Applies text settings to the content of the content control.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The properties that will be set to the content of the content control. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Apply text formatting to an inline content control in a document.

```javascript editor-docx
// How do I set font size and bold style on an inline content control in a document?

// Style an inline text field with custom typography to highlight it visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control with the font size set to 30 and the font weight set to bold.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
inlineLvlSdt.SetTextPr(textPr);
```
