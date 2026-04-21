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
| iconType | Required | [TextIconType](../../Enumeration/TextIconType.md) |  | No description provided. |

## Returns

boolean

## Example

Set new icon type for text annotation in a PDF document.

```javascript editor-pdf
// How to set icon type for a text annotation in a PDF document?

// Set icon type and display the result in a PDF document.

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
