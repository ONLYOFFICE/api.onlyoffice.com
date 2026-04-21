# GetClassType

Returns a type of the ApiLineAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiLineAnnotation](../ApiLineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"lineAnnot"

## Example

Check the class type returned by a line annotation in a PDF document.

```javascript editor-pdf
// How do I check what type a line annotation object is in a PDF document?

// Retrieve and output the class type string for a line annotation in a PDF document.

let doc = Api.GetDocument();
let lineAnnot = Api.CreateLineAnnot([10, 10, 160, 32], {x: 12, y: 12}, {x: 155, y: 30});
lineAnnot.SetEndStyle("openArrow");
let page = doc.GetPage(0);
page.AddObject(lineAnnot);
console.log(`Annot class type is: ${lineAnnot.GetClassType()}`);
```
