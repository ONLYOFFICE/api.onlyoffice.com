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

Unsubscribe from the hyperlink click event in a presentation.

```javascript editor-pptx
// Detaching events removes previously registered listeners to stop event handling.

// Remove the listener from the asc_onHyperlinkClick event using Api.detachEvent().

Api.detachEvent("asc_onHyperlinkClick");
```
