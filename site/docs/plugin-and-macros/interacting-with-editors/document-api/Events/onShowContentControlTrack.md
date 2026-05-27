# onShowContentControlTrack

The function called when the content control receives focus and its track appears.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| ids | string[] | An array of content control IDs that have received focus. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onShowContentControlTrack", (ids) => {
    console.log("event: onShowContentControlTrack");
    for (let i = 0; i < ids.length; i++) {
        console.log("Id: " + ids[i]);
    }
});
```
