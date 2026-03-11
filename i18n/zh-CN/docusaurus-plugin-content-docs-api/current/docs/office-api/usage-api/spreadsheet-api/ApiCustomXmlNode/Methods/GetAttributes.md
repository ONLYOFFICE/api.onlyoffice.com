# GetAttributes

返回当前 XML 节点的属性列表。

## 语法

```javascript
expression.GetAttributes();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[CustomXmlNodeAttribute](../../Enumeration/CustomXmlNodeAttribute.md)[]

## 示例

此示例展示如何获取自定义 XML 节点的所有属性。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const xmlManager = worksheet.GetCustomXmlParts();
const xmlString = `
<zoo>
	<animal species='Lion' id='101'>
		<name>Leo</name>
	</animal>
</zoo>`;
const xml = xmlManager.Add(xmlString);
const animalNode = xml.GetNodes('/zoo/animal')[0];

const attributes = animalNode.GetAttributes();

worksheet.GetRange('A1').SetValue('Attribute');
worksheet.GetRange('B1').SetValue('Value');
for (let i = 0; i < attributes.length; i++) {
	worksheet.GetRange('A' + (i + 2)).SetValue(attributes[i].name);
	worksheet.GetRange('B' + (i + 2)).SetValue(attributes[i].value);
}

```
