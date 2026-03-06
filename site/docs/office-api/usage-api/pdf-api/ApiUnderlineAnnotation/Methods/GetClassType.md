# GetClassType

Returns a type of the ApiUnderlineAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiUnderlineAnnotation](../ApiUnderlineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"underlineAnnot"

## Example

This example gets class type of strikeout annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
