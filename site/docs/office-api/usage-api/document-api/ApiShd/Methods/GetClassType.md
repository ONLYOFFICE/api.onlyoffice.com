# GetClassType

Returns a type of the ApiShd class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiShd](../ApiShd.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"shd"

## Example

Retrieve the class type of a paragraph shading in a document.

```javascript editor-docx
// Confirm that the object returned by GetShd is an ApiShd object in a document.

// Shade a paragraph and write the class type of its shading into the paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.SetShd(Api.CreateShd('clear', Api.Color('#DDEBF7')));
paragraph.AddText('Class type of the paragraph shading: ' + paragraph.GetShd().GetClassType());
```
