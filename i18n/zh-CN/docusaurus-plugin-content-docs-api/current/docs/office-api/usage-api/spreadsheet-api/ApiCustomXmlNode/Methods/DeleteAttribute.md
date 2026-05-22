# DeleteAttribute

从自定义 XML 节点删除属性。
如果属性存在，它将被移除。

## 语法

```javascript
expression.DeleteAttribute(name);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要删除的属性名称。 |

## 返回值

boolean

## 示例

从电子表格中存储的 XML 节点移除命名属性。

```javascript editor-xlsx
// How do I strip a specific attribute from a custom XML element in a spreadsheet?

// Clean up XML metadata by dropping an attribute and confirming the change in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book category='fiction' status='available'>
		<title>The Odyssey</title>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);
const bookNode = xml.GetNodes('/bookstore/book')[0];

bookNode.DeleteAttribute('category');

const attributes = bookNode.GetAttributes();
worksheet.GetRange('A1').SetValue('Remaining attributes count: ' + attributes.length);
worksheet.GetRange('A2').SetValue('XML after deletion: ' + xml.GetXml());
```
