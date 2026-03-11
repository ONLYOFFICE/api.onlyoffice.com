# UpdateAttribute

更新指定 XPath 的 XML 节点的属性。

## 语法

```javascript
expression.UpdateAttribute(xPath, name, value);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要更新其属性的节点的 XPath。 |
| name | 必需 | string |  | 要更新的属性名称。 |
| value | 必需 | string |  | 属性的新值。 |

## 返回值

boolean

## 示例

此示例展示如何更新自定义 XML 部件元素中属性的值。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<config version='1.0' namespace='http://api.onlyoffice.com' />";
const xml = xmlManager.Add(xmlString);

xml.UpdateAttribute('/config', 'version', '9.4');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());

```
