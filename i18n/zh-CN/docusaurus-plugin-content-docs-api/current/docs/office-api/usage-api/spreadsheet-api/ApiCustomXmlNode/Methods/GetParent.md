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

获取电子表格中自定义 XML 节点的父节点。

```javascript editor-xlsx
// How to get the parent for a custom XML node in a spreadsheet?

// Get the parent and display the result in a spreadsheet.

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
