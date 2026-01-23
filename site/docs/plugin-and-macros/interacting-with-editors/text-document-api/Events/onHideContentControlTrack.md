# onHideContentControlTrack

The function called when the content control loses focus in the document.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| ids | string[] | An array of content control IDs that have lost focus. |

```javascript
window.Asc.plugin.attachEditorEvent("onHideContentControlTrack", (ids) => {
    onHideContentControlTrack(ids);
});
```

