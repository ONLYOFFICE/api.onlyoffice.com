# GetEndStyle

Gets a line end style.

## Syntax

```javascript
expression.GetEndStyle();
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## Example

Get end line style to line annotation in a PDF document.

```javascript editor-pdf
// How to get the end style for a line annotation in a PDF document?

// Get the end style and display the result in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 15, y: 15}, {x: 155, y: 30});
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`End style is: ${lineAnnot.GetEndStyle()}`);
```
