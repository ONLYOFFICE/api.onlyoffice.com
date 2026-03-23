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

This example shows how to create an auto-color and use it as a font color.

```javascript editor-docx
const doc = Api.GetDocument();
const color = Api.AutoColor();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in auto color.');
paragraph.SetColor(color);

```
