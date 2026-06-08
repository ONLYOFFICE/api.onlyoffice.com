# GetClassType

Returns a type of the ApiCaretAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCaretAnnotation](../ApiCaretAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"caretAnnot"

## Example

Get the class type of a caret annotation in a PDF document.

```javascript editor-pdf
// Retrieve the class type from an annotation object.

// Display the annotation class type in the console.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);
```
