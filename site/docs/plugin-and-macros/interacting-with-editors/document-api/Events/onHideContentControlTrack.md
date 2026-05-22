# onHideContentControlTrack

The function called when the content control loses focus in the document.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| ids | string[] | An array of content control IDs that have lost focus. |

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onHideContentControlTrack", (ids) => {
    console.log("event: onHideContentControlTrack");
    for (let i = 0; i < ids.length; i++) {
        console.log("Id: " + ids[i]);
    }
});
```
