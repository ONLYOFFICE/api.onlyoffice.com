# AddAddinField

Creates a new addin field with the data specified in the request.

## Syntax

```javascript
expression.AddAddinField(data);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | [AddinFieldData](../Enumeration/AddinFieldData.md) |  | Addin field data. |

## Returns

[AddinFieldData](../Enumeration/AddinFieldData.md)

## Example

```javascript
let addinFieldData = {"FieldId": "1", "Value": "Addin №1", "Content": "This is the first addin field"};
window.Asc.plugin.executeMethod("AddAddinField", [addinFieldData]);
```
