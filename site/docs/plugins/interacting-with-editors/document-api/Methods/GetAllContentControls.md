# GetAllContentControls

Returns information about all the content controls that have been added to the page.

## Syntax

```javascript
expression.GetAllContentControls();
```

`expression` - A variable that represents an [Api](../document-api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ContentControl](../Enumeration/ContentControl.md)[]

## Example

```javascript
window.Asc.plugin.init = function () {
    window.Asc.plugin.executeMethod("GetAllContentControls", null, function (controls) {
        for (var i = 0; i < controls.length; i++) {
            if (controls[i].Tag === "{tag}") {
                window.Asc.plugin.executeMethod("SelectContentControl", [controls[i].InternalId]);
                break;
            }
        }
    });
};
```
