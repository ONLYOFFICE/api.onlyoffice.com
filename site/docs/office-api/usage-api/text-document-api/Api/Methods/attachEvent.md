# attachEvent

Subscribes to the specified event and calls the callback function when the event fires.

## Syntax

```javascript
expression.attachEvent(eventName, callback);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| eventName | Required | string |  | The event name. |
| callback | Required | function |  | Function to be called when the event fires. |

## Returns

boolean

## Example

This example shows how to subscribe to the hyperlink click event.

```javascript editor-docx
// How to attach the "asc_onHyperlinkClick" event.

// Subscribes to the "asc_onHyperlinkClick" event and calls the callback function which displays the "HYPERLINK!!!" message in the console log when the event fires.

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
```
