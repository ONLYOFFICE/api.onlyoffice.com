# onSlideShowSlideChanged

The function called when slide changes during a slide show presentation. Provides information about both the current and previous slide.

## Parameters

| **Name** | **Data type** | **Description** |
| --------- | ------------- | ----------- |
| data | Object | The object containing slide information. |
| data.slideIndex | number | The index of the new slide. |
| data.previousSlideIndex | number | The index of the previous slide (-1 if it's the first slide). |

```javascript
window.Asc.plugin.attachEditorEvent('onSlideShowSlideChanged', (data) => {
	data.previousSlideIndex === -1
		? console.log(`This is the first slide that we are showing
			since the presentation slide show started`)
		: console.log(`Slide changed during presentation:
			from slide index ${data.previousSlideIndex}
			to slide index ${data.slideIndex}`);
});
```

