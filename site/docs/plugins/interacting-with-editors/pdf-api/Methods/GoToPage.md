# GoToPage

Moves to specified page.

## Syntax

```javascript
expression.GoToPage(pageIndex, rect);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pageIndex | Required | number |  | Zero-based page index to navigate to. |
| rect | Optional | [Rect](../Enumeration/Rect.md) |  | If specified only x1, y1 (ex. [10, 10]) - then moves to them with inherited zoom, if specified whole rect (ex. [10, 10, 100, 100]) then zoom to rect |

## Returns

boolean
