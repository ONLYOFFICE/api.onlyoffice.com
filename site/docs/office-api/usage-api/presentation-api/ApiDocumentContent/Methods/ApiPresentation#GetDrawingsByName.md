# ApiPresentation#GetDrawingsByName

Returns a collection of drawing objects from the document content filtered by their names.

## Syntax

```javascript
expression.ApiPresentation#GetDrawingsByName(ids);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ids | Required | string[] |  | An array of drawing names to filter by. |

## Returns

[Drawing](../../Enumeration/Drawing.md)[]