# UpdateElement

更新指定 XPath 的 XML 元素。

## 语法

```javascript
expression.UpdateElement(xPath, xmlStr);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要更新的节点的 XPath。 |
| xmlStr | 必需 | string |  | 用于替换节点内容的 XML 字符串。 |

## 返回值

boolean

## 示例

此示例演示如何更新自定义 XML 部件中的 XML 元素。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = '<content><text>Old value</text></content>';
const xml = xmlManager.Add(xmlString);

xml.UpdateElement('/content/text', '<text>New value</text>');
worksheet.GetRange('A1').SetValue('XML after update: ' + xml.GetXml());

```
