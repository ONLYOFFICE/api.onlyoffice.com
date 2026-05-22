# IsAutoColor

Returns true if the color is set to auto.

## Syntax

```javascript
expression.IsAutoColor();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a color is set to automatic in a document.

```javascript editor-docx
// How do I tell if a color uses the automatic setting in a document?

// Confirm which color objects resolve to the automatic color and which do not in a document.

const doc = Api.GetDocument();
const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('Is themeColor an auto color? ' + themeColor.IsAutoColor());
paragraph.AddLineBreak();
paragraph.AddText('Is autoColor an auto color? ' + autoColor.IsAutoColor());
```
