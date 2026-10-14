# GetType

Returns the shading type.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents an [ApiShd](../ApiShd.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ShdType](../../Enumeration/ShdType.md)

## Example

Retrieve the type of a paragraph shading in a document.

```javascript editor-docx
// Compare a shaded paragraph with a paragraph whose shading is removed in a document.

// Write the shading type of each paragraph into its text.

const doc = Api.GetDocument();
const shaded = doc.GetElement(0);
shaded.SetShd(Api.CreateShd('clear', Api.Color('#E2EFDA')));
shaded.AddText('Shading type of this paragraph: ' + shaded.GetShd().GetType());
const plain = Api.CreateParagraph();
plain.SetShd(Api.CreateShd('nil'));
plain.AddText('Shading type of this paragraph: ' + plain.GetShd().GetType());
doc.Push(plain);
```
