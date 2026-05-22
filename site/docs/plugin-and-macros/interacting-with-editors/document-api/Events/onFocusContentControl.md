# onFocusContentControl

The function called to show which content control has been focused.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| control | [Event_ContentControl](../Enumeration/Event_ContentControl.md) | Defines the content control that has been focused. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onFocusContentControl", (control) => {
    console.log("event: onFocusContentControl");
    console.log("Tag: " + control.Tag);
    console.log("Id: " + control.Id);
    console.log("Lock: " + control.Lock);
    console.log("InternalId: " + control.InternalId);
    console.log("Alias: " + control.Alias);
    console.log("Appearance: " + control.Appearance);
});
```
