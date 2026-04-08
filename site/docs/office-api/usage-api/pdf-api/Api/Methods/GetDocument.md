# GetDocument

Creates a text field with the specified text field properties.

## Syntax

```javascript
expression.GetDocument();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocument](../../ApiDocument/ApiDocument.md)

## Example

This example gets the document object for further use.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.AddPage(1);
page.SetRotation(90);
```
