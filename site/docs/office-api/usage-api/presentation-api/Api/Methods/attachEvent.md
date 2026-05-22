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

This method doesn't return any data.

## Example

Subscribe to the hyperlink click event in a presentation.

```javascript editor-pptx
// Event handlers allow responding to user interactions like clicks on hyperlinks.

// Attach a listener to the asc_onHyperlinkClick event using Api.attachEvent().

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
```
