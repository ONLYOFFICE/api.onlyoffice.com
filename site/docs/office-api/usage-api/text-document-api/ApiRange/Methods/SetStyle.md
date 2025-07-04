# SetStyle

Sets the style to the current Range.

## Syntax

```javascript
expression.SetStyle(oStyle);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The style which must be applied to the text character. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example sets the style to the current Range.

```javascript editor-docx
// How to style a text of the range.

// Get a range, apply "Heading 2" style to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
let style = doc.GetStyle("Heading 2");
range.SetStyle(style);
```
