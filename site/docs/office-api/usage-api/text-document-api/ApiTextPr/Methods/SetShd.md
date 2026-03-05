# SetShd

Specifies the shading applied to the contents of the current text run.

## Syntax

```javascript
expression.SetShd(type, color);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type applied to the contents of the current text run. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color or pattern used to fill the shading. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the shading applied to the contents of the current text run.

```javascript editor-docx
// How to set a shading for a text.

// Create a text run object, specify its shading options.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd('clear', Api.HexColor('#ff6f3d'));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");

```
