# SetReadOnly

Sets field read only

## Syntax

```javascript
expression.SetReadOnly();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Set field read only in a PDF document.

```javascript editor-pdf
// How can I set read only using a base field in a PDF document?

// Set read only for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
