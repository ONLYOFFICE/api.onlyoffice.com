# SetShd

Specifies the shading applied to the contents of the current text run.

Inherited from [ApiTextPr.SetShd](../../ApiTextPr/Methods/SetShd.md).

## Syntax

```javascript
expression.SetShd(shd);
```

`expression` - A variable that represents an [ApiRangeTextPr](../ApiRangeTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | Required | [ApiShd](../../ApiShd/ApiShd.md) |  | The shading created with the Api.CreateShd method. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply a background shading color behind text in a document.

```javascript editor-docx
// How do I fill the background of a word or phrase with a color in a document?

// Highlight content by coloring the area directly behind the characters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd(Api.CreateShd('clear', Api.HexColor('#ff6f3d')));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");
```
