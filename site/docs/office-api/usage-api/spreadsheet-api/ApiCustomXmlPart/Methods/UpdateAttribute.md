# UpdateAttribute

Updates an attribute of the XML node at the specified XPath.

## Syntax

```javascript
expression.UpdateAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node whose attribute should be updated. |
| name | Required | string |  | The name of the attribute to update. |
| value | Required | string |  | The new value for the attribute. |

## Returns

boolean