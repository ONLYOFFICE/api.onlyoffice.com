# GetInternalId

Returns an internal ID of the current drawing.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

Inherited from [ApiDrawing.GetInternalId](../../ApiDrawing/Methods/GetInternalId.md).

## Example

Get the internal identifier of a drawing in a PDF.

```javascript editor-pdf
// Useful for retrieving a drawing object's internal ID.

// Create a shape and print its internal ID.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 50 * 36000, 60 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

console.log(`Drawing internal ID is: ${drawing.GetInternalId()}`);
```
