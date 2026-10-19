# GetSpacingLineRule

Returns the paragraph line spacing rule.

Inherited from [ApiParaPr.GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md).

## Syntax

```javascript
expression.GetSpacingLineRule();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"auto" \| "atLeast" \| "exact" \| undefined

## Example

Read the line spacing rule applied to a paragraph in a document.

```javascript editor-docx
// How do I find out which line spacing rule a paragraph uses in a document?

// Display the spacing rule name alongside paragraph text to confirm the setting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();
let spacingLineRule = paragraph.GetSpacingLineRule();
paragraph.AddText("Spacing line rule: " + spacingLineRule);
```
