# SetShd

Specifies the shading applied to the contents of the paragraph.

Inherited from [ApiParaPr.SetShd](../../ApiParaPr/Methods/SetShd.md).

## Syntax

```javascript
expression.SetShd(type, color);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type which will be applied to the contents of the current paragraph. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color or pattern used to fill the shading. |

## Returns

boolean

## Example

Apply a background shading color to a paragraph in a document.

```javascript editor-docx
// How do I fill the background of a paragraph with a specific color in a document?

// Highlight paragraph content by setting its background shade in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a shade to a paragraph. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetShd("clear", Api.HexColor('#FF6F3D'));
```
