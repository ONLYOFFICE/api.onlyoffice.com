# DeleteAttribute

从指定 XPath 的 XML 节点删除属性。

## 语法

```javascript
expression.DeleteAttribute(xPath, name);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要从中删除属性的节点的 XPath。 |
| name | 必需 | string |  | 要删除的属性名称。 |

## 返回值

boolean

## 示例

This example shows how to delete an attribute from a custom XML part element.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://example' />";
const xml = xmlManager.Add(xmlString);

xml.DeleteAttribute('/config', 'namespace');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());

```
