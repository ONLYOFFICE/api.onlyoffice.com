# SetIconType

Sets icon type for this annotation.

## Syntax

```javascript
expression.SetIconType(iconType);
```

`expression` - A variable that represents a [ApiTextAnnotation](../ApiTextAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| iconType | Required | [TextIconType](../../Enumeration/TextIconType.md) |  | The icon type for the text annotation. |

## Returns

boolean

## Example

Choose the icon symbol for a text annotation in a PDF.

```javascript editor-pdf
// How do I change which icon a text annotation shows in a PDF?

// Assign a different icon appearance to an annotation comment in a PDF.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let oldIcon = textAnnot.GetIconType();
textAnnot.SetContents("Annot contents");
textAnnot.SetIconType("star");
let newIcon = textAnnot.GetIconType();

let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Changed icon from: ${oldIcon} to ${newIcon}`);
```
