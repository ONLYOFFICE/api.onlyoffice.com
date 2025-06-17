---
sidebar_position: -1
---

# Content control buttons

Starting from version 9.0, you can add custom buttons to content controls using the `Asc.ButtonContentControl` class:

``` ts
let button = new Asc.ButtonContentControl();
```

- Set the path to the icon displayed on the button using the `icons` property:

``` ts
button.icons = '/resources/check%scale%(default).png';
```

- Use the `attachOnClick` method to define the action to be performed when the button is clicked:

``` ts
button.attachOnClick(function(contentControlId){
    Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
});
```

## Example

``` ts
(function(window){
  window.Asc.plugin.init = function()
  {
    let button = new Asc.ButtonContentControl();
    button.icons = '/resources/check%scale%(default).png';
    button.attachOnClick(function(contentControlId){
      Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
    });
 
    button = new Asc.ButtonContentControl();
    button.icons = '/resources/close%scale%(default).png';
    button.attachOnClick(function(contentControlId){
      Asc.plugin.executeMethod("RemoveContentControls", [[{"InternalId": contentControlId}]]);
    });
  }
})(window);
```
