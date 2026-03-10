# ApiCustomXmlNode

表示 ApiCustomXmlNode 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Add](./Methods/Add.md) | [ApiCustomXmlNode](../ApiCustomXmlNode/ApiCustomXmlNode.md) | 为当前 XML 节点创建子节点。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前 XML 节点。 |
| [DeleteAttribute](./Methods/DeleteAttribute.md) | boolean | 从自定义 XML 节点删除属性。如果属性存在，它将被移除。 |
| [GetAttribute](./Methods/GetAttribute.md) | string \| null | 从自定义 XML 节点检索属性值。如果属性不存在，则返回 `false`。 |
| [GetAttributes](./Methods/GetAttributes.md) | [CustomXmlNodeAttribute](../Enumeration/CustomXmlNodeAttribute.md)[] | 返回当前 XML 节点的属性列表。 |
| [GetClassType](./Methods/GetClassType.md) | "customXmlNode" | 返回 ApiCustomXmlNode 类的类型。 |
| [GetNodeName](./Methods/GetNodeName.md) | string | 返回当前 XML 节点的名称。 |
| [GetNodeValue](./Methods/GetNodeValue.md) | string | 返回当前节点内容的 XML 字符串表示。 |
| [GetNodes](./Methods/GetNodes.md) | [ApiCustomXmlNode](../ApiCustomXmlNode/ApiCustomXmlNode.md)[] | 根据给定的 XPath 从自定义 XML 节点返回节点。 |
| [GetParent](./Methods/GetParent.md) | [ApiCustomXmlNode](../ApiCustomXmlNode/ApiCustomXmlNode.md) \| null | 返回当前 XML 节点的父节点。 |
| [GetText](./Methods/GetText.md) | string | 返回当前节点及其子节点的内部文本。例如：`&lt;text&gt;123&lt;one&gt;4&lt;/one&gt;&lt;/text&gt;` 返回 `"1234"`。 |
| [GetXPath](./Methods/GetXPath.md) | string | 返回当前 XML 节点的绝对 XPath。 |
| [GetXml](./Methods/GetXml.md) | string | 返回当前节点的 XML 字符串。 |
| [SetAttribute](./Methods/SetAttribute.md) | boolean | 为自定义 XML 节点设置属性。如果属性已存在，则不会被修改。 |
| [SetNodeValue](./Methods/SetNodeValue.md) | boolean | 设置当前节点的 XML 内容。 |
| [SetText](./Methods/SetText.md) | boolean | 设置当前 XML 节点的文本内容。 |
| [SetXml](./Methods/SetXml.md) | boolean | 设置当前 XML 节点的 XML 内容。 |
| [UpdateAttribute](./Methods/UpdateAttribute.md) | boolean | 更新自定义 XML 节点中现有属性的值。如果属性不存在，则不会执行更新。 |
