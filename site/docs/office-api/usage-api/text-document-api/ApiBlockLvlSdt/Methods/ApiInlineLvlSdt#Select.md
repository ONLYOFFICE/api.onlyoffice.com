# ApiInlineLvlSdt#Select

Selects the current content control.

## Syntax

```javascript
expression.ApiInlineLvlSdt#Select();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to create an inline content control and select it.

```javascript editor-docx
let doc = Api.GetDocument();
let checkbox = doc.AddCheckBoxContentControl();
checkbox.Select();
```
