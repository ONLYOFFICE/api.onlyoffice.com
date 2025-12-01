# MoveCursorUp

Moves a cursor up.

## Syntax

```javascript
expression.MoveCursorUp(nCount, isShift, isCtl);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | number |  | The number of lines to move up. |
| isShift | Required | boolean |  | Specifies whether to select text during the move. |
| isCtl | Required | boolean |  | Specifies whether to move by paragraph instead of by line. |

## Returns

boolean