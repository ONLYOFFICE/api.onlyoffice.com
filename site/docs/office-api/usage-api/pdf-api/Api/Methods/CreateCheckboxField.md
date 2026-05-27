# CreateCheckboxField

Creates a checkbox field.

## Syntax

```javascript
expression.CreateCheckboxField(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiCheckboxField](../../ApiCheckboxField/ApiCheckboxField.md)

## Example

Create a checkbox form field in a PDF.

```javascript editor-pdf
// How do I add a checkbox to a form in a PDF?

// Set the initial value of a checkbox in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);
checkboxField.SetValue('Yes');
```
