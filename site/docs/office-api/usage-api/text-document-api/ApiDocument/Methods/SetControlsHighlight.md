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
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

boolean

## Example

This example sets the highlight to the content controls from the document.

```javascript editor-docx
// How to highlight thw controls with rose color.

// Add elements to the document and color their background.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(255, 111, 61);
```
