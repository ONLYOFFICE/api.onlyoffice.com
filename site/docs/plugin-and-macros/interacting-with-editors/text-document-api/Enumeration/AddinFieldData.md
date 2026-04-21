# AddinFieldData

The addin field data.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Content | string | Field text content. |
| FieldId | string | Field identifier. |
| Value | string | Field value. |

## Example

```javascript
let addinFieldData = {"FieldId": "1", "Value": "Addin №1", "Content": "This is the first addin field"};
window.Asc.plugin.executeMethod("AddAddinField", [addinFieldData]);
```
