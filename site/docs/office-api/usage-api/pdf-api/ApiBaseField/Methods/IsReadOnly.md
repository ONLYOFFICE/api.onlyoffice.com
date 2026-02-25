# IsReadOnly

Checks if field is read only

## Syntax

```javascript
expression.IsReadOnly();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example gets field read only and display's it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
