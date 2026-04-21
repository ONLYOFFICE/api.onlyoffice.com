# SetDateFormat

Sets date format for field.

## Syntax

```javascript
expression.SetDateFormat(sFormat);
```

`expression` - A variable that represents a [ApiTextField](../ApiTextField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | string |  | date format (e.g. "dd.mm.yyyy") |

## Returns

boolean

## Example

Get text field and set date format for it.

```javascript editor-pdf
// How do I set date format in a PDF document?

// Set date format using a text field object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");
```
