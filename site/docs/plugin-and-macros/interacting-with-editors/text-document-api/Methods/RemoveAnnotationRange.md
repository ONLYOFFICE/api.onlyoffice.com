# RemoveAnnotationRange

Removes the specified annotation or all annotations.

## Syntax

```javascript
expression.RemoveAnnotationRange(obj);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name**    | **Required/Optional** | **Data type** | **Description**                                                               |
| ----------- | --------------------- | ------------- | ----------------------------------------------------------------------------- |
| obj         | Required              | `Object`      | The range removing object.                                                    |
| paragraphId | Required              | `string`      | ID of the paragraph containing the annotation.                                |
| all         | Optional              | `boolean`     | Optional parameter, flag to remove all annotations for the current paragraph. |
| rangeId     | Optional              | `string`      | ID of the specific range to remove.                                           |
| name        | Optional              | `string`      | Optional name/type of the annotation (e.g., "grammar", "spelling", etc.).     |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod("RemoveAnnotationRange", [{
    paragraphId: "p1",
    rangeId: "a1",
    name: "grammar"
}]);
```
