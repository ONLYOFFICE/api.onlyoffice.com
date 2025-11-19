# SelectAnnotationRange

Selects text in a document using a given annotation.

## Syntax

```javascript
expression.SelectAnnotationRange(obj);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name**        | **Required/Optional** | **Data type** | **Default** | **Description**                                                           |
| --------------- | --------------------- | ------------- | ----------- | ------------------------------------------------------------------------- |
| obj             | Required              | `Object`      |             | The range selection object.                                               |
| paragraphId | Required              | `string`      |             | ID of the paragraph containing the annotation.                            |
| rangeId     | Required              | `string`      |             | ID of the specific range to select.                                       |
| name        | Optional              | `string`      |             | Optional name/type of the annotation (e.g., "grammar", "spelling", etc.). |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("SelectAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}]);
```
