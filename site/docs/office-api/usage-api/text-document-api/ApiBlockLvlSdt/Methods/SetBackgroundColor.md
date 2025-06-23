# SetBackgroundColor

Sets the background color to the current content control.

## Syntax

```javascript
expression.SetBackgroundColor(r, g, b, a);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| a | Required | [byte](../../Enumeration/byte.md) |  | Alpha color component value. |

## Returns

boolean

## Example

This example shows how to set the background color for the block-level container.

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(0, 0, 255, 40);
blockLvlSdt.GetContent().GetElement(0).AddText("This is an inline text content control with a transparent blue background.");
doc.AddElement(0, blockLvlSdt);

```
