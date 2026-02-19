# ApiDocument#GetDrawingsByName

Returns a collection of drawing objects from the document filtered by their names.

## Syntax

```javascript
expression.ApiDocument#GetDrawingsByName(ids);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ids | Required | string[] |  | An array of drawing names to filter by. |

## Returns

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)[]