# SetNodeValue

设置当前节点的 XML 内容。

## 语法

```javascript
expression.SetNodeValue(xml);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | 必需 | string |  | 要设置为当前节点内容的 XML 字符串。 |

## 返回值

boolean

## 示例

This example shows how to set the XML content for the current node.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xmlText = '<bookstore><book><title lang="en">The Odyssey</title><author>Homer</author></book></bookstore>';
const xml = xmlManager.Add(xmlText);
const node = xml.GetNodes('/bookstore/book')[0];
node.SetNodeValue('<book><title lang="en">JavaScript Guide</title></book>');

const fill = Api.CreateSolidFill(Api.HexColor('#BF0000'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after update: ' + xml.GetXml());

```
