# GetSpacingLineRule

Returns the paragraph line spacing rule.

## Syntax

```javascript
expression.GetSpacingLineRule();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"auto" \| "atLeast" \| "exact" \| undefined

## Example

Read the line spacing rule applied to a paragraph and display it in a document.

```javascript editor-docx
// How do I get the line spacing rule of a paragraph in a document?

// Confirm the spacing mode in use by printing the line spacing rule after setting triple-line spacing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineRule = paraPr.GetSpacingLineRule();
paragraph.AddText("Spacing line rule: " + spacingLineRule);
```
