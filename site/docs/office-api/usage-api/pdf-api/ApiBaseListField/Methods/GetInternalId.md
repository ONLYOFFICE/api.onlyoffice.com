# GetInternalId

Returns an internal ID of the current field.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

Inherited from [ApiBaseField.GetInternalId](../../ApiBaseField/Methods/GetInternalId.md).

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
