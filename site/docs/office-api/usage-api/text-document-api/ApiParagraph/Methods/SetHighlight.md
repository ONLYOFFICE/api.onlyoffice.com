# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current paragraph.

## Syntax

```javascript
expression.SetHighlight(sColor);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

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

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets highlight color "lightGray" for the paragraph.

```javascript editor-docx
// How to set highlight to the text.

// Create a new paragraph and highlight it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text highlighted with light gray color.");
paragraph.SetHighlight("lightGray");
```
