# GetPartialName

Gets field partial name.

## Syntax

```javascript
expression.GetPartialName();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get field partial name and display it in a PDF document.

```javascript editor-pdf
// How to get the partial name for a base field in a PDF document?

// Get the partial name and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
