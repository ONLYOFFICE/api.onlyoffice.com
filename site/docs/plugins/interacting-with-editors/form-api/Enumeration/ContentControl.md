# ContentControl

The content control object.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Alias | string | An alias of the content control. |
| Appearance | 1 \| 2 | The visualization type of the content control: **1** - frame (bounding box), **2** - hidden. |
| Border | Object | The border color of the content control. Present only if the border color is set. |
| Color | Object | The tag color of the content control. Present only if the tag color is set. |
| FormKey | string | A unique form key. Present only if the content control is a form field. |
| FormValue | string \| boolean \| Date | The current value of the form field. Present only if the content control is a form field. |
| Id | string | A unique content control identifier. It can be used to search for a certain content control and make reference to it in your code. |
| InternalId | string | A unique internal identifier of the content control. It is used for all operations with content controls. |
| Lock | [ContentControlLock](../Enumeration/ContentControlLock.md) | A value that defines if it is possible to delete and/or edit the content control or not. |
| RadioGroup | string | A group key of the radio button. Present only if the content control is a radio button form field. |
| Shd | Object | The shading color of the content control. Present only if the shading color is set. |
| Tag | string | A tag assigned to the content control. The same tag can be assigned to several content controls so that you can make reference to them in your code. |

## Example

```javascript
let contentControl = {
    "Tag": "Document",
    "Id": 0,
    "Lock": 0,
    "InternalId": "1_713"
};
```
