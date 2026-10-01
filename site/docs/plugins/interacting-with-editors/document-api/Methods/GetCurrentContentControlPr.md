# GetCurrentContentControlPr

Returns the current content control properties.

## Syntax

```javascript
expression.GetCurrentContentControlPr(contentFormat);
```

`expression` - A variable that represents an [Api](../document-api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| contentFormat | Required | string |  | The content format ("none", "text", "html", "ole" or "desktop"). |

## Returns

[ContentControlProperties](../Enumeration/ContentControlProperties.md)

## Example

```javascript
window.Asc.plugin.event_onClick = function (isSelectionUse) {
    window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function (obj) {
        window.Asc.plugin.currentContentControl = obj;
        var controlTag = obj && !isSelectionUse ? obj.Tag : "";
        console.log("Current content control tag: " + controlTag);
    });
};
```
