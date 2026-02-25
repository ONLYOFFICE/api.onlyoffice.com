# GetClassType

Returns a type of the ApiStrikeoutAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiStrikeoutAnnotation](../ApiStrikeoutAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"strikeoutAnnot"

## Example

This example gets class type of caret annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);
```
