# GetInternalId

Returns an internal ID of the current annotation.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

Inherited from [ApiBaseAnnotation.GetInternalId](../../ApiBaseAnnotation/Methods/GetInternalId.md).

## Example

Get the internal identifier of an annotation in a PDF.

```javascript editor-pdf
// Useful for retrieving an annotation's internal ID.

// Create an annotation and print its internal ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
page.AddObject(squareAnnot);

console.log(`Annotation internal ID is: ${squareAnnot.GetInternalId()}`);
```
