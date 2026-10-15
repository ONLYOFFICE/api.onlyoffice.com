# GetByInternalId

Returns an object by its internal ID.

## Syntax

```javascript
expression.GetByInternalId(id);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | Required | string |  | The internal ID of the object. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

Find a drawing by its internal ID in a spreadsheet.

```javascript editor-xlsx
// Useful for returning to a drawing whose internal ID was saved earlier.

// Add a shape, find it again by its internal ID, recolor it and write its name and sheet to a cell.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape('rect', Api.MillimetersToEmus(60), Api.MillimetersToEmus(30), fill, stroke, 1, 0, 2, 0);
const internalId = shape.GetInternalId();

const drawing = Api.GetByInternalId(internalId);
drawing.SetFill(Api.CreateSolidFill(Api.HexColor('#ED7D31')));
worksheet.GetRange('A1').SetValue('Found ' + drawing.GetName() + ' on the sheet ' + drawing.GetParentSheet().GetName());
```
