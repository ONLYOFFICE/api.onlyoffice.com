# SetShd

Specifies the shading applied to the contents of the paragraph.

## Syntax

```javascript
expression.SetShd(type, color);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type which will be applied to the contents of the current paragraph. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color or pattern used to fill the shading. |

## Returns

boolean

## Example

Specify the shading applied to the contents of the paragraph in a document.

```javascript editor-docx
// How to add shading to the paragraph in a document.

// Apply the clear shading to the paragraph in a document.

let doc = Api.GetDocument();

let myStyle = doc.CreateStyle('My document style');
let paraPr = myStyle.GetParaPr();
paraPr.SetShd('clear', Api.RGB(255, 111, 61));

let paragraph = doc.GetElement(0);
paragraph.AddText('This is an example of setting a shading to a paragraph.');
paragraph.SetStyle(myStyle);
```
