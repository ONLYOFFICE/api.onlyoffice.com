# CreateDateField

Creates a text date field.

## Syntax

```javascript
expression.CreateDateField(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiTextField](../../ApiTextField/ApiTextField.md)

## Example

Create a date input field in a PDF form.

```javascript editor-pdf
// How do I add a date picker to a form in a PDF?

// Set a default date value in a date field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let dateField = Api.CreateDateField([10, 10, 160, 32]);
page.AddObject(dateField);
dateField.SetValue('01.01.2025');
```
