# RemoveAnnotationRange

Remove a specific annotation range from the document.

## Syntax

```javascript
expression.RemoveAnnotationRange(obj);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | Required | Object |  | The range removing object |
| obj.paragraphId | Required | string |  | ID of the paragraph containing the annotation |
| obj.rangeId | Required | string |  | ID of the specific range to remove |
| obj.name | Optional | string |  | Optional name/type of the annotation (e.g., "grammar", "spelling", etc.) |

## Returns

This method doesn't return any data.