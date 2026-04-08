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

This example shows how to get the class type of ApiColor object.

```javascript editor-docx
const doc = Api.GetDocument();
const color = Api.ThemeColor('accent1');
const paragraph = doc.GetElement(0);
paragraph.AddText('Class type of ApiColor instance: ' + color.GetClassType());

```
