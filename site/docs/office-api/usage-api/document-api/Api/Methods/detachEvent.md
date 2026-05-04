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

Unsubscribe from the hyperlink click event in a document.

```javascript editor-docx
// How to detach from the "asc_onHyperlinkClick" event in a document.

// Unsubscribes from the "asc_onHyperlinkClick" event in a document.

Api.detachEvent("asc_onHyperlinkClick");
```
