# SetFullName

Sets new field name if possible.

## Syntax

```javascript
expression.SetFullName(name);
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The new full name for the field. |

## Returns

boolean

## Example

Assign a complete name identifier to a form field in a PDF.

```javascript editor-pdf
// How do I name a form field in a PDF?

// Set the unique full name property of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('EXAMPLE');
textField.SetValue('Field full name is: ' + textField.GetFullName());
```
