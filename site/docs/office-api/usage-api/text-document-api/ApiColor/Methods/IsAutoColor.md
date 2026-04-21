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

Check if the color is an auto color in a document.

```javascript editor-docx
// How to is auto color for a color in a document?

// Is auto color and display the result in a document.

const doc = Api.GetDocument();
const themeColor = Api.ThemeColor('accent1');
const autoColor = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('Is themeColor an auto color? ' + themeColor.IsAutoColor());
paragraph.AddLineBreak();
paragraph.AddText('Is autoColor an auto color? ' + autoColor.IsAutoColor());
```
