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

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<zoo><animal species="Lion"><name>Leo</name></animal></zoo>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/zoo/animal')[0];
const parent = node.GetParent();

const fill = Api.CreateSolidFill(Api.HexColor('#81a181'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Parent node name: ' + parent.GetNodeName());

```
