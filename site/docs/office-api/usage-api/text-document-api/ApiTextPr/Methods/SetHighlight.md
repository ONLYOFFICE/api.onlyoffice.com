# SetHighlight

Specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.

## Syntax

```javascript
expression.SetHighlight(sColor);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../Enumeration/highlightColor.md) |  | Available highlight color. |

## Available highlight colors

- "black"
- "blue"
- "cyan"
- "green"
- "magenta"
- "red"
- "yellow"
- "white"
- "darkBlue"
- "darkCyan"
- "darkGreen"
- "darkMagenta"
- "darkRed"
- "darkYellow"
- "darkGray"
- "lightGray"
- "none"

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.

```javascript editor-docx
// How to color a text object background.

// Create a text run object, add color to its background.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");
```
