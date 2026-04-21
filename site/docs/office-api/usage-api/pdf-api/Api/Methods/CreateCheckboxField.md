# CreateCheckboxField

Creates a checkbox field.

## Syntax

```javascript
expression.CreateCheckboxField(aRect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aRect | Required | [Rect](../../Enumeration/Rect.md) |  | widget rect |

## Returns

[ApiCheckboxField](../../ApiCheckboxField/ApiCheckboxField.md)

## Example

How to create and add a checkbox field to document.

```javascript editor-pdf
// How to create the checkbox field in a PDF document?

// Create the checkbox field using the PDF document API.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);
checkboxField.SetValue('Yes');
```
