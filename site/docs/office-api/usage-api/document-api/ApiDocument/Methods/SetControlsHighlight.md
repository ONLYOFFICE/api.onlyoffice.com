# SetControlsHighlight

Sets the highlight to the content controls from the current document.

## Syntax

```javascript
expression.SetControlsHighlight(color);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The highlight color for the content controls. |

## Returns

boolean

## Example

Apply a background highlight color to all content controls in a document.

```javascript editor-docx
// How do I change the highlight color of content controls in a document?

// Make form controls stand out visually by setting a custom fill color across the whole document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(Api.HexColor('#FFEFBF'));
```
