# onShowContentControlTrack

The function called when the content control receives focus and its track appears.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| ids | string[] | An array of content control IDs that have received focus. |

```javascript
window.Asc.plugin.attachEditorEvent("onHideContentControlTrack", (ids) => {
    onShowContentControlTrack(ids);
});
```

