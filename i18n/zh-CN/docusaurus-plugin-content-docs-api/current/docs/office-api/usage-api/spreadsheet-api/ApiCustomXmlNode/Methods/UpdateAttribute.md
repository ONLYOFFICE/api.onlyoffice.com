# UpdateAttribute

更新自定义 XML 节点中现有属性的值。
如果属性不存在，则不会执行更新。

## 语法

```javascript
expression.UpdateAttribute(name, value);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要更新的属性名称。 |
| value | 必需 | string |  | 要分配给属性的新值。 |

## 返回值

boolean

## 示例

此示例演示如何更新自定义 XML 节点中现有属性的值。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<bookstore>
	<book category='fiction'>
		<title>The Odyssey</title>
	</book>
</bookstore>`;
const xml = xmlManager.Add(xmlString);
const bookNode = xml.GetNodes('/bookstore/book')[0];

bookNode.UpdateAttribute('category', 'ancient');

const attributes = bookNode.GetAttributes();
worksheet.GetRange('A1').SetValue('Updated attribute: ' + attributes[0].name + '=' + attributes[0].value);

```
