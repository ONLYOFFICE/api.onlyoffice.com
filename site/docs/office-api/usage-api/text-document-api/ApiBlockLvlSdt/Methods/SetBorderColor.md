# SetBorderColor

Sets the border color to the current content control.

## Syntax

```javascript
expression.SetBorderColor(color);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Set the border color for the block-level container in a document.

```javascript editor-docx
// How can I set border color using a block-level content control in a document?

// Set border color for a block-level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBorderColor(Api.HexColor('#0000FF'));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with blue border.");
doc.AddElement(0, blockLvlSdt);
```
