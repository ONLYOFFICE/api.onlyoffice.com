# onChangeCurrentSlide

The function called when the current slide has changed.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| index | number | The index of the newly activated slide. |

```javascript
window.Asc.plugin.attachEditorEvent('onChangeCurrentSlide', (index) => {
    console.log('Current slide changed to index: ' + index);
});
```

