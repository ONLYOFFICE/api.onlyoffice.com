# GetInternalId

Returns an internal ID of the current field.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiBaseField](../ApiBaseField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal identifier of a form field in a PDF.

```javascript editor-pdf
// Useful for retrieving a field's internal ID.

// Create a text field and print its internal ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

console.log(`Field internal ID is: ${textField.GetInternalId()}`);
```
