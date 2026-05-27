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

Stop responding to hyperlink clicks in a document.

```javascript editor-docx
// How do I remove a hyperlink click listener in a document?

// Cancel a previously registered hyperlink click handler to prevent it from firing in a document.

Api.detachEvent("asc_onHyperlinkClick");
```
