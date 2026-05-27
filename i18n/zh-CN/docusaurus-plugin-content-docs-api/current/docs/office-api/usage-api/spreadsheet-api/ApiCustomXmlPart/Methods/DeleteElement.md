# DeleteElement

删除指定 XPath 的 XML 元素。

## 语法

```javascript
expression.DeleteElement(xPath);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要删除的节点的 XPath。 |

## 返回值

boolean

## 示例

从电子表格中存储的 XML 数据移除子元素。

```javascript editor-xlsx
// How do I cut out an unwanted XML node from custom data saved in a spreadsheet?

// Prune a specific branch of an XML structure to keep only the relevant content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<content>
	<text>example_text</text>
	<extra>remove me</extra>
</content>`;
const xml = xmlManager.Add(xmlString);

xml.DeleteElement('/content/extra');
worksheet.GetRange('A1').SetValue('XML after deletion: ' + xml.GetXml());
```
