# GetClassType

Returns a type of the ApiColor class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"color"

## Example

Retrieve the class type of a color in a document.

```javascript editor-docx
// How to identify the class type of a color in a document?

// Obtain the class type identifier of a color object in a document.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Class type of ApiColor instance: ' + color.GetClassType());
```
