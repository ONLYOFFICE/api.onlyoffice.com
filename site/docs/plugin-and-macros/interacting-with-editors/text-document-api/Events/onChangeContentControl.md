# onChangeContentControl

The function called to show which content control has been changed.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| control | [Event_ContentControl](../Enumeration/Event_ContentControl.md) | Defines the content control that has been changed. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onChangeContentControl", (control) => {
    console.log("event: onChangeContentControl");
    console.log("Tag: " + control.Tag);
    console.log("Id: " + control.Id);
    console.log("Lock: " + control.Lock);
    console.log("InternalId: " + control.InternalId);
    console.log("Alias: " + control.Alias);
    console.log("Appearance: " + control.Appearance);
});
```
