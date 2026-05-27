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

Read the local name of a form field in a PDF.

```javascript editor-pdf
// How can I find the partial name of a form field in a PDF?

// Access the short name identifier assigned to a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPartialName('EXAMPLE');
textField.SetValue('Field partial name is: ' + textField.GetFullName());
```
