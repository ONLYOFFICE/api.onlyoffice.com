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

Run a custom action whenever a hyperlink is clicked in a document.

```javascript editor-docx
// How do I run a function automatically when a hyperlink is clicked in a document?

// Listen for hyperlink clicks and trigger a response without manual intervention in a document.

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
```
