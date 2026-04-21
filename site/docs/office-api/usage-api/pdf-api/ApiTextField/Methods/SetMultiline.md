# SetMultiline

Sets text field multiline prop.

## Syntax

```javascript
expression.SetMultiline(bMultiline);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMultiline | Required | boolean |  | will the field be multiline |

## Returns

boolean

## Example

Add text field and set multiline for it in a PDF document.

```javascript editor-pdf
// How do I set multiline in a PDF document?

// Set multiline using a text field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
```
