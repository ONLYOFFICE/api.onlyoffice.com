# SetXml

设置当前 XML 节点的 XML 内容。

## 语法

```javascript
expression.SetXml(strXml);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| strXml | 必需 | string |  | 要设置为节点内容的 XML 字符串。 |

## 返回值

boolean

## 示例

在电子表格中用全新的标记覆盖 XML 节点。

```javascript editor-xlsx
// How do I replace the contents of an XML node with different XML in a spreadsheet?

// Swap out a node's structure by supplying a fresh XML fragment in a spreadsheet.

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
bookNode.SetXml('<book><title>New Book</title></book>');
worksheet.GetRange('A1').SetValue('XML after replacement:');
worksheet.GetRange('A2').SetValue(xml.GetXml());
```
