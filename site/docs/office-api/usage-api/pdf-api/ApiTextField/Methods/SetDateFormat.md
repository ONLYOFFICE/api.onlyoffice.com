# SetDateFormat

Sets date format for field.

## Syntax

```javascript
expression.SetDateFormat(format);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | Required | string |  | date format (e.g. "dd.mm.yyyy") |

## Returns

boolean

## Example

Format dates the way users expect to see them in a PDF text field.

```javascript editor-pdf
// How do I make sure dates display in a specific format in a PDF?

// Apply a date format pattern to a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");
```
