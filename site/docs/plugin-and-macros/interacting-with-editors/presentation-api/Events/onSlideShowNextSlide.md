# onSlideShowNextSlide

The function called after a slide has been changed and displayed during a slide show presentation.\
Fires before the slide content is actually displayed.

## Parameters

This event has no parameters.

```javascript
window.Asc.plugin.attachEditorEvent('onSlideShowNextSlide', () => {
    console.log('Moved to the next slide during presentation slide show');
});
```

