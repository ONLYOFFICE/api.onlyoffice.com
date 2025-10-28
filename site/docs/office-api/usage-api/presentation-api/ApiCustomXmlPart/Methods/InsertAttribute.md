# InsertAttribute

Inserts an attribute into the XML node at the specified XPath.

## Syntax

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to insert the attribute into. |
| name | Required | string |  | The name of the attribute to insert. |
| value | Required | string |  | The value of the attribute to insert. |

## Returns

boolean