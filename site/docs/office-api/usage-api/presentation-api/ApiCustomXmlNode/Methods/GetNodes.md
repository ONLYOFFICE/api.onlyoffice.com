# GetNodes

Returns nodes from the custom XML node based on the given XPath.

## Syntax

```javascript
expression.GetNodes(xPath);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | Required | string |  | The XPath expression to match nodes. |

## Returns

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## Example

This example shows how to get nodes from a custom XML node based on an XPath.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = `
	<zoo>
		<animal species="Lion" id="101">
			<name>Leo</name>
			<age>5</age>
		</animal>
		<animal species="Penguin" id="102">
			<name>Tux</name>
			<age>3</age>
		</animal>
	</zoo>
`;
const xml = xmlManager.Add(xmlText);
const nodes = xml.GetNodes('/zoo/animal');

const fill = Api.CreateSolidFill(Api.HexColor('#4167a9'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let displayText = 'Found ' + nodes.length + ' animals in the zoo:';
for (let i = 0; i < nodes.length; i++) {
	const species = nodes[i].GetAttribute('species');
	const name = nodes[i].GetNodes('/name')[0].GetText();
	const age = nodes[i].GetNodes('/age')[0].GetText();
	displayText += '\n' + (i + 1) + '. ' + species + ' with name ' + name + ', aged ' + age;
}
paragraph.AddText(displayText);

```
