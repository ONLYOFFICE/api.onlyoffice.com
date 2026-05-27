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

列出演示文稿中 XML 元素的所有属性。

```javascript editor-pptx
// How do I view all attributes assigned to an XML node in a presentation?

// Retrieve the name-value pairs of an XML element in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<zoo><animal species="Lion" id="101"><name>Leo</name></animal></zoo>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/zoo/animal')[0];
const attributes = node.GetAttributes();

const fill = Api.CreateSolidFill(Api.RGB(230, 220, 205));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let displayText = 'Attributes of the animal node:\n';
for (let i = 0; i < attributes.length; i++) {
	displayText += 'name: ' + attributes[i].name + ', value: ' + attributes[i].value + '\n';
}
paragraph.AddText(displayText);
```
