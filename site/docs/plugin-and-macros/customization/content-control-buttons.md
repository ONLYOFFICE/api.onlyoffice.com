---
sidebar_position: -1
---

# Content control buttons

Starting from version 9.0, you can add custom buttons to content controls using the `Asc.ButtonContentControl` class:

``` ts
let button = new Asc.ButtonContentControl();
```

## icons

`Type: string`

Sets the path to the icon displayed on the button.

**Example**:

``` ts
button.icons = "/resources/check%scale%(default).png";
```

## attachOnClick

`Type: function`

Defines the action to be performed when the button is clicked.

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| contentControlId | `string` | The ID of the content control that the button belongs to. |

**Example**:

``` ts
button.attachOnClick((contentControlId) => {
  Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
});
```

## Example

``` ts
(function (window) {
  window.Asc.plugin.init = () => {
    let button = new Asc.ButtonContentControl();
    button.icons = "/resources/check%scale%(default).png";
    button.attachOnClick((contentControlId) => {
      Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
    });

    button = new Asc.ButtonContentControl();
    button.icons = "/resources/close%scale%(default).png";
    button.attachOnClick((contentControlId) => {
      Asc.plugin.executeMethod("RemoveContentControls", [[{ InternalId: contentControlId }]]);
    });
  };
})(window);
```
