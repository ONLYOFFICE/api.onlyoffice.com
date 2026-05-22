# InsertAttribute

将属性插入指定 XPath 的 XML 节点。

## 语法

```javascript
expression.InsertAttribute(xPath, name, value);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要插入属性的节点的 XPath。 |
| name | 必需 | string |  | 要插入的属性名称。 |
| value | 必需 | string |  | 要插入的属性值。 |

## 返回值

boolean

## 示例

向电子表格中存储的 XML 元素添加新的命名属性。

```javascript editor-xlsx
// How do I attach extra metadata to an existing XML node in a spreadsheet?

// Enrich an XML element with an additional attribute to carry more structured data in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<config />';
const xml = xmlManager.Add(xmlString);

xml.InsertAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());
```
