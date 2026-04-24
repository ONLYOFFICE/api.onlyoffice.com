---
sidebar_position: 5
---

# Custom buttons

To process [buttons](../fundamentals/configuration/config-json.md#variationsbuttons) which are specified in the plugin variations (not in the modal windows / panels), use the **button** method. This function is called when any of the plugin buttons is clicked.

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | `number` | Defines the button index in the [buttons](../fundamentals/configuration/config-json.md#variationsbuttons) array of the *config.json* file. If `id == -1`, then the plugin considers that the **Close** window cross button has been clicked or its operation has been somehow interrupted. |
| windowId | `number` | Defines an index of the button from the modal window. |

## Example

``` ts
window.Asc.plugin.button = function (id) {
  if (id === -1) {
    // The Close button was clicked or the plugin was interrupted.
    window.Asc.plugin.executeCommand("close", "");
    return;
  }
  // id corresponds to the button index in config.json variations.buttons.
  if (id === 0) {
    window.Asc.plugin.callCommand(function () {
      var oDocument = Api.GetDocument();
      // ...
    }, true);
  }
  window.Asc.plugin.executeCommand("close", "");
};
```
