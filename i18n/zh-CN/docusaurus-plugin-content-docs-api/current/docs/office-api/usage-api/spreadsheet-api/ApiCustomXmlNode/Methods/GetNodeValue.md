# GetNodeValue

返回当前节点内容的 XML 字符串表示。

## 语法

```javascript
expression.GetNodeValue();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取电子表格中自定义 XML 节点的值。

```javascript editor-xlsx
// How to get the node value for a custom XML node in a spreadsheet?

// Get the node value and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion'>
		<name>Leo</name>
		<age>5</age>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);

const animalNode = xml.GetNodes('/zoo/animal')[0];
const nodeValue = animalNode.GetNodeValue();
worksheet.GetRange('A1').SetValue('Node value: ' + nodeValue);
```
