# GetInternalId

Returns an internal ID of the current field widget.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

Inherited from [ApiBaseWidget.GetInternalId](../../ApiBaseWidget/Methods/GetInternalId.md).

## Example

Get the internal identifier of a form field widget in a PDF.

```javascript editor-pdf
// How do I retrieve a widget's internal ID?

// Create a text field and print the internal ID of its widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Widget internal ID is: ${widgets[0].GetInternalId()}`);
```
