# GetFieldByName

Gets field by it's name.

## Syntax

```javascript
expression.GetFieldByName(name);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | the full name parameter. |

## Returns

[ApiField](../../Enumeration/ApiField.md)

## Example

Find a specific form field by its name in a PDF.

```javascript editor-pdf
// How do I search for a field using its assigned name in a PDF?

// Retrieve a field and set its value by name in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetFullName('Text field 1');
textField = doc.GetFieldByName('Text field 1');
textField.SetValue('Example value');
```
