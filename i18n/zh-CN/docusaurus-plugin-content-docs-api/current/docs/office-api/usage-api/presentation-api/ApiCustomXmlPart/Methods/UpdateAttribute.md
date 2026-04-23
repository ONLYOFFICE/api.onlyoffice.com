# UpdateAttribute

更新指定 XPath 的 XML 节点的属性。

## 语法

```javascript
expression.UpdateAttribute(xPath, name, value);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要更新其属性的节点的 XPath。 |
| name | 必需 | string |  | 要更新的属性名称。 |
| value | 必需 | string |  | 属性的新值。 |

## 返回值

boolean

## 示例

此示例演示如何更新自定义 XML 节点中属性的值。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const xmlManager = presentation.GetCustomXmlParts();
const xml = xmlManager.Add('<content xmlns="http://example" version="1.0"></content>');
xml.UpdateAttribute('/content', 'version', '2.0');

const fill = Api.CreateSolidFill(Api.HexColor('#00897B'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('XML after update: ' + xml.GetXml());

```
