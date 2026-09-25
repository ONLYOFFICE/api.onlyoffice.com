# RemoveAnnotationRange

Removes a specific annotation range from the presentation.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.RemoveAnnotationRange(annotation);
```

`expression` - A variable that represents a [Api](../presentation-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| annotation | Required | Object |  | The annotation removing object. |
| annotation.all | Optional | boolean | false | Flag to remove all annotations for the current paragraph. |

## Returns

This method doesn't return any data.
