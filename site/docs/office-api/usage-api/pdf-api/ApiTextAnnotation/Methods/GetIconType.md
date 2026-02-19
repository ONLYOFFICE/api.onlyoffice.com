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

This example gets icon type of text annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
textAnnot.SetContents("Annot contents");

let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Text annot icon type is: ${textAnnot.GetIconType()}`);
```
