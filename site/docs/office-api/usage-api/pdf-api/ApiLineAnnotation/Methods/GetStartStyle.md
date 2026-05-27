# GetStartStyle

Gets a line start style.

## Syntax

```javascript
expression.GetStartStyle();
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## Example

Check what kind of starting decoration a line has in a PDF.

```javascript editor-pdf
// How do I find what arrow or marker is at the start of a line in a PDF?

// Retrieve the line starting style of a line annotation in a PDF.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Start style is: ${lineAnnot.GetStartStyle()}`);
```
