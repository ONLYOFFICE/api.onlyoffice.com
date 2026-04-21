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

This method doesn't return any data.

## Example

Unsubscribe on hyperlink click event in a presentation.

```javascript editor-pptx
// How to detach an event on hyperlink click in a presentation.

// Unsubscribe from the hyperlink click event in a presentation.

Api.detachEvent("asc_onHyperlinkClick");
```
