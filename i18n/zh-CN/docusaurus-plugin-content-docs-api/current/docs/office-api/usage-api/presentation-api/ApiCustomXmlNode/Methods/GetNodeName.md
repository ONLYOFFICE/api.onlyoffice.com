# GetNodeName

返回当前 XML 节点的名称。

## 语法

```javascript
expression.GetNodeName();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何检索当前 XML 节点的名称。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<documentData xmlns="http://example.com/example"><text>Sample text content</text></documentData>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/documentData/text')[0];
const nodeName = node.GetNodeName();

const fill = Api.CreateSolidFill(Api.HexColor('#4F3A7B'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Node name: ' + nodeName);

```
