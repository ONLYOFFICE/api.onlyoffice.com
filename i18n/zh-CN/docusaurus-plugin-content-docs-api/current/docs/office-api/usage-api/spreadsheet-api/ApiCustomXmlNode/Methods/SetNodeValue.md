# SetNodeValue

设置当前节点的 XML 内容。

## 语法

```javascript
expression.SetNodeValue(xml);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | 必需 | string |  | 要设置为当前节点内容的 XML 字符串。 |

## 返回值

boolean

## 示例

This example shows how to set the value of a custom XML node.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book>
		<title>The Odyssey</title>
		<author>Homer</author>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);

const bookNode = xml.GetNodes('/bookstore/book')[0];
bookNode.SetNodeValue('<book>Updated content</book>');
worksheet.GetRange('A1').SetValue('XML after update:');
worksheet.GetRange('B1').SetValue(xml.GetXml());

```
