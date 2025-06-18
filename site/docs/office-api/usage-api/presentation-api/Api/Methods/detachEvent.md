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

This example shows how to unsubscribe on hyperlink click event.

```javascript editor-pptx
// How to detach an event on hyperlink click.

// Unsubscribe from the hyperlink click event.

Api.detachEvent("asc_onHyperlinkClick");
```
