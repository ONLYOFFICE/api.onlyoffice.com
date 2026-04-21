# GetFullName

Gets field full name.

## Syntax

```javascript
expression.GetFullName();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get field full name and display it in a PDF document.

```javascript editor-pdf
// How can I get the full name using a base field in a PDF document?

// Get the full name for a base field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Field full name is: ' + textField.GetFullName());
```
