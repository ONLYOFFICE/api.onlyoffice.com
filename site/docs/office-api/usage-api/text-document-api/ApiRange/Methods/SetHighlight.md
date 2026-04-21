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

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Specify a highlighting color which is applied as a background to the contents of the Range in a document.

```javascript editor-docx
// How to color a range background in a document.

// Create a range and add color to its background in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
range.SetHighlight("lightGray");
```
