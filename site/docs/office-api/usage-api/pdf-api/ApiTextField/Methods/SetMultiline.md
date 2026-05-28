# SetMultiline

Sets text field multiline prop.

## Syntax

```javascript
expression.SetMultiline(multiline);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| multiline | Required | boolean |  | will the field be multiline |

## Returns

boolean

## Example

Allow text input to wrap across multiple lines in a PDF text field.

```javascript editor-pdf
// How do I let users type multiple paragraphs in a single text field in a PDF?

// Enable multiple lines of text input for a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
```
