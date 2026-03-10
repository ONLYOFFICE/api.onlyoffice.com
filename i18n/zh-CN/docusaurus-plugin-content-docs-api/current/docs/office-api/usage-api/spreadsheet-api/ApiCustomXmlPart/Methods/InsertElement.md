# InsertElement

在指定 XPath 插入 XML 元素。

## 语法

```javascript
expression.InsertElement(xPath, xmlStr, index);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 将插入新元素的父节点的 XPath。 |
| xmlStr | 必需 | string |  | 要插入的 XML 字符串。 |
| index | 可选 | number |  | 插入新 XML 元素的位置。如果省略，元素将作为最后一个子元素追加。 |

## 返回值

boolean

## 示例

This example shows how to insert a new XML element into a custom XML part.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = "<content version='9.4' />";
const xml = xmlManager.Add(xmlString);

xml.InsertElement('/content', '<text>lorem</text>');
worksheet.GetRange('A1').SetValue('XML after insertion:');
worksheet.GetRange('A2').SetValue(xml.GetXml());

```
