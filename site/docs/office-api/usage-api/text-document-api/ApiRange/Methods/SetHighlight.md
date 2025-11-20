# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current Range.

## Syntax

```javascript
expression.SetHighlight(sColor);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

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

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example specifies a highlighting color which is applied as a background to the contents of the Range.

```javascript editor-docx
// How to color a range background.

// Create a range and add color to its background.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
range.SetHighlight("lightGray");
```
