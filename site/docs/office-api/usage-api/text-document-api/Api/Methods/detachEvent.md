# detachEvent

Unsubscribes from the specified event.

## Syntax

```javascript
expression.detachEvent(eventName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | Required | string |  | The event name. |

## Returns

boolean

## Example

This example shows how to unsubscribe from the hyperlink click event.

```javascript editor-docx
// How to detach from the "asc_onHyperlinkClick" event.

// Unsubscribes from the "asc_onHyperlinkClick" event.

Api.detachEvent("asc_onHyperlinkClick");
```
