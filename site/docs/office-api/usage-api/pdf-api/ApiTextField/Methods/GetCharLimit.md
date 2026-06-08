# GetCharLimit

Gets the text field character limit.
\<note\> Char limit 0 means field doesn't have char limit

## Syntax

```javascript
expression.GetCharLimit();
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Check the maximum character limit for a text field in a PDF.

```javascript editor-pdf
// How do I find out how many characters a text field accepts in a PDF?

// Read the character limit restriction of a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());
```
