# DeleteAttribute

从指定 XPath 的 XML 节点删除属性。

## 语法

```javascript
expression.DeleteAttribute(xPath, name);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要从中删除属性的节点的 XPath。 |
| name | 必需 | string |  | 要删除的属性名称。 |

## 返回值

boolean

## 示例

This example demonstrates how to delete an attribute from a custom XML part.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example" version="1.0"></content>');
xml.DeleteAttribute('/content', 'version');

const fill = Api.CreateSolidFill(Api.HexColor('#7E57C2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after deletion: ' + xml.GetXml());

```
