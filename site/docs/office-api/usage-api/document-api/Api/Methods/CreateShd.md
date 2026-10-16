# CreateShd

Creates the shading which can be applied to text, a paragraph, a table or a table cell.

## Syntax

```javascript
expression.CreateShd(type, color);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type: **"nil"** - no shading, **"clear"** - solid fill. |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | The shading color. Required for the **"clear"** type. |

## Returns

[ApiShd](../../ApiShd/ApiShd.md)

## Example

Create a shading object and apply it to a paragraph in a document.

```javascript editor-docx
// Build the shading once with Api.CreateShd and pass it to the SetShd method in a document.

// Shade a paragraph with a light yellow background in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This paragraph has a light yellow shading.');
const shd = Api.CreateShd('clear', Api.Color('#FFF2CC'));
paragraph.SetShd(shd);
```
