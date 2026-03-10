# GetParent

返回当前 XML 节点的父节点。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md) \| null

## 示例

This example shows how to get the parent of a custom XML node.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion'>
		<name>Leo</name>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);

const animalNode = xml.GetNodes('/zoo/animal')[0];
const parentNode = animalNode.GetParent();
const grandParent = parentNode.GetParent();

worksheet.GetRange('A1').SetValue('Parent node name: ' + parentNode.GetNodeName());
worksheet.GetRange('A2').SetValue('Grand parent: ' + grandParent);

```
