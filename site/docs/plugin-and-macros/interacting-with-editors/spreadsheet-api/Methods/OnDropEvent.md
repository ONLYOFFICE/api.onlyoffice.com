# OnDropEvent

Implements the external drag&drop emulation.

## Syntax

```javascript
expression.OnDropEvent(obj);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | Required | object |  | The drag&drop emulation properties. |
| obj.type | Required | string |  | The drag&drop event type: **onbeforedrop** - an event that is fired when the selected text or element is dragged; **ondrop** - an event that is fired when the selected text or element is dropped on a valid drop target. |
| obj.x | Required | number |  | The horizontal coordinate (in pixels) at which the mouse was clicked, relative to the left edge of the entire document. |
| obj.y | Required | number |  | The vertical coordinate (in pixels) at which the mouse was clicked, relative to the top edge of the entire document. |
| obj.html | Required | string |  | The dragged HTML element. |
| obj.text | Required | string |  | The dragged text. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("OnDropEvent", [{
  "type": "onbeforedrop",
  "x" : pos.x,
  "y" : pos.y
}]);

window.Asc.plugin.executeMethod ("OnDropEvent", [{
  "type": "ondrop",
  "x" : pos.x,
  "y" : pos.y,
  "text" : "test text",
  "html" : "<span>test html</span>"
}]);
```
