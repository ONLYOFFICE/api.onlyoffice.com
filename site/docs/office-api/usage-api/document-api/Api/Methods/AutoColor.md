# AutoColor

Creates an auto-color.

## Syntax

```javascript
expression.AutoColor();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Apply automatic text color to a paragraph in a document.

```javascript editor-docx
// How do I set text to use the automatic color in a document?

// Let the editor choose the appropriate text color automatically in a document.

const doc = Api.GetDocument();
const color = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in auto color.');
paragraph.SetColor(color);
```
