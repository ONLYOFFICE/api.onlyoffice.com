# IsScrollLongText

Checks if text field can scroll long text.

## Syntax

```javascript
expression.IsScrollLongText();
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get text field and display scroll long text property in a PDF document.

```javascript editor-pdf
// How do I is scroll long text in a PDF document?

// Is scroll long text using a text field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetScrollLongText(true);
textField.SetValue('Scroll long text property is: ' + textField.IsScrollLongText());
```
