# UpdateAttribute

Updates the value of an existing attribute in the custom XML node.\
If the attribute doesn't exist, the update will not occur.

## Syntax

```javascript
expression.UpdateAttribute(name, value);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the attribute to update. |
| value | Required | string |  | The new value to assign to the attribute. |

## Returns

boolean