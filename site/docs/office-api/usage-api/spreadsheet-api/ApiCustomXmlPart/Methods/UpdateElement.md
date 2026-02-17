# UpdateElement

Updates an XML element at the specified XPath.

## Syntax

```javascript
expression.UpdateElement(xPath, xmlStr);
```

`expression` - A variable that represents a [ApiCustomXmlPart](../ApiCustomXmlPart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath of the node to update. |
| xmlStr | Required | string |  | The XML string to replace the node content with. |

## Returns

boolean