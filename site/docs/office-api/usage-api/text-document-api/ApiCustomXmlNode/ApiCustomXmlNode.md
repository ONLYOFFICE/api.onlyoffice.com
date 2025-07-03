# ApiCustomXmlNode

Represents the ApiCustomXmlNode class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Add](./Methods/Add.md) | [ApiCustomXmlNode](../ApiCustomXmlNode/ApiCustomXmlNode.md) | Creates a child node for the current XML node. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current XML node. |
| [DeleteAttribute](./Methods/DeleteAttribute.md) | boolean | Deletes an attribute from the custom XML node. If the attribute exists, it will be removed. |
| [GetAttribute](./Methods/GetAttribute.md) | string \| null | Retrieves the attribute value from the custom XML node. If the attribute doesn't exist, it returns `false`. |
| [GetAttributes](./Methods/GetAttributes.md) | [CustomXmlNodeAttribute](../Enumeration/CustomXmlNodeAttribute.md)[] | Returns a list of attributes of the current XML node. |
| [GetClassType](./Methods/GetClassType.md) | "customXmlNode" | Returns a type of the ApiCustomXmlNode class. |
| [GetNodeName](./Methods/GetNodeName.md) | string | Returns the name of the current XML node. |
| [GetNodeValue](./Methods/GetNodeValue.md) | string | Returns the XML string representation of the current node content. |
| [GetNodes](./Methods/GetNodes.md) | [ApiCustomXmlNode](../ApiCustomXmlNode/ApiCustomXmlNode.md)[] | Returns nodes from the custom XML node based on the given XPath. |
| [GetParent](./Methods/GetParent.md) | [ApiCustomXmlNode](../ApiCustomXmlNode/ApiCustomXmlNode.md) \| null | Returns the parent of the current XML node. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current node and its child nodes. For example: `&lt;text&gt;123&lt;one&gt;4&lt;/one&gt;&lt;/text&gt;` returns `"1234"`. |
| [GetXPath](./Methods/GetXPath.md) | string | Returns the absolute XPath of the current XML node. |
| [GetXml](./Methods/GetXml.md) | string | Returns the XML string of the current node. |
| [SetAttribute](./Methods/SetAttribute.md) | boolean | Sets an attribute for the custom XML node. If the attribute already exists, it will not be modified. |
| [SetNodeValue](./Methods/SetNodeValue.md) | boolean | Sets the XML content for the current node. |
| [SetText](./Methods/SetText.md) | boolean | Sets the text content of the current XML node. |
| [SetXml](./Methods/SetXml.md) | boolean | Sets the XML content of the current XML node. |
| [UpdateAttribute](./Methods/UpdateAttribute.md) | boolean | Updates the value of an existing attribute in the custom XML node. If the attribute doesn't exist, the update will not occur. |
