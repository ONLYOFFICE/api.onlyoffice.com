# GetIconType

Gets icon type of this annotation.

## Syntax

```javascript
expression.GetIconType();
```

`expression` - A variable that represents a [ApiTextAnnotation](../ApiTextAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[TextIconType](../../Enumeration/TextIconType.md)

## Example

Get icon type of text annotation in a PDF document.

```javascript editor-pdf
// How to get the icon type for a text annotation in a PDF document?

// Get the icon type and display the result in a PDF document.

let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot contents");

let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Text annot icon type is: ${textAnnot.GetIconType()}`);
```
